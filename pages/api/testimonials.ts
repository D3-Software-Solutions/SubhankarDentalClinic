import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../utils/db';
import { initDb } from '../../utils/initDb';

initDb();

export const config = {
  api: {
    bodyParser: false, // We'll handle multipart/form-data manually
  },
};

import formidable, { File, Fields, Files } from 'formidable';
import fs from 'fs';
import path from 'path';

const uploadDir = path.join(process.cwd(), 'public', 'testimonial-images');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

function parseForm(req: NextApiRequest): Promise<{ fields: Fields; files: Files }> {
  const form = formidable({ multiples: true, uploadDir, keepExtensions: true });
  return new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: Fields, files: Files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { fields, files } = await parseForm(req);
      let name = '';
      let testimonial = '';
      if (typeof fields.name !== 'undefined') {
        name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
      }
      if (typeof fields.testimonial !== 'undefined') {
        testimonial = Array.isArray(fields.testimonial) ? fields.testimonial[0] : fields.testimonial;
      }
      if (!name || !testimonial) return res.status(400).json({ error: 'Missing required fields' });
      const stmt = db.prepare('INSERT INTO testimonials (name, testimonial) VALUES (?, ?)');
      const result = stmt.run(name, testimonial);
      const testimonialId = result.lastInsertRowid as number;
      // Handle images (optional)
      const imageFiles = files.images
        ? Array.isArray(files.images)
          ? files.images
          : [files.images]
        : [];
      for (const file of imageFiles) {
        if (!file) continue; // skip if no file
        const filePath = (file as File).filepath || (file as any).path;
        if (!filePath) continue;
        const fileName = path.basename(filePath);
        const imageUrl = `/testimonial-images/${fileName}`;
        db.prepare('INSERT INTO testimonial_images (testimonial_id, image_url) VALUES (?, ?)').run(testimonialId, imageUrl);
      }
      return res.status(201).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error', details: String(err) });
    }
  }
  if (req.method === 'GET') {
    try {
      const testimonials = db.prepare('SELECT * FROM testimonials ORDER BY createdAt DESC').all() as any[];
      for (const testimonial of testimonials) {
        const images = db.prepare('SELECT image_url FROM testimonial_images WHERE testimonial_id = ?').all(testimonial.id) as { image_url: string }[];
        testimonial.images = images.map((img) => img.image_url);
      }
      return res.status(200).json(testimonials);
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error', details: String(err) });
    }
  }
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
} 