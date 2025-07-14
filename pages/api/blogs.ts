import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../utils/db';
import { initDb } from '../../utils/initDb';

initDb();

export const config = {
  api: {
    bodyParser: false,
  },
};

import formidable, { File, Fields, Files } from 'formidable';
import fs from 'fs';
import path from 'path';

const uploadDir = path.join(process.cwd(), 'public', 'blog-images');
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
  if (req.method === 'GET') {
    try {
      const { slug } = req.query;
      if (slug) {
        const blog = db.prepare('SELECT * FROM blogs WHERE slug = ?').get(slug) as any;
        if (!blog) return res.status(404).json({ error: 'Not found' });
        const images = db.prepare('SELECT image_url FROM blog_images WHERE blog_id = ?').all(blog.id) as { image_url: string }[];
        blog.images = images.map(img => img.image_url);
        return res.status(200).json(blog);
      } else {
        const blogs = db.prepare('SELECT * FROM blogs ORDER BY date DESC').all() as any[];
        for (const blog of blogs) {
          const images = db.prepare('SELECT image_url FROM blog_images WHERE blog_id = ?').all(blog.id) as { image_url: string }[];
          blog.images = images.map(img => img.image_url);
        }
        return res.status(200).json(blogs);
      }
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error', details: String(err) });
    }
  }
  if (req.method === 'POST') {
    try {
      const { fields, files } = await parseForm(req);
      const { title, slug, date, content, excerpt, seoTitle, seoDescription, seoKeywords } = fields;
      if (!title || !slug || !date || !content) return res.status(400).json({ error: 'Missing required fields' });
      const stmt = db.prepare('INSERT INTO blogs (title, slug, date, content, excerpt, seoTitle, seoDescription, seoKeywords) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
      const result = stmt.run(title, slug, date, content, excerpt, seoTitle, seoDescription, seoKeywords);
      const blogId = result.lastInsertRowid as number;
      // Handle images
      const imageFiles = files.images
        ? Array.isArray(files.images)
          ? files.images
          : [files.images]
        : [];
      for (const file of imageFiles) {
        const filePath = (file as File).filepath || (file as any).path;
        const fileName = path.basename(filePath);
        const imageUrl = `/blog-images/${fileName}`;
        db.prepare('INSERT INTO blog_images (blog_id, image_url) VALUES (?, ?)').run(blogId, imageUrl);
      }
      return res.status(201).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error', details: String(err) });
    }
  }
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
} 