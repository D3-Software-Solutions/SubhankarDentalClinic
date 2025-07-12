import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../utils/db');
const { initDb } = require('../../utils/initDb');

initDb();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { slug } = req.query;
      if (slug) {
        const blog = db.prepare('SELECT * FROM blogs WHERE slug = ?').get(slug);
        if (!blog) return res.status(404).json({ error: 'Not found' });
        return res.status(200).json(blog);
      } else {
        const blogs = db.prepare('SELECT * FROM blogs ORDER BY date DESC').all();
        return res.status(200).json(blogs);
      }
    }
    if (req.method === 'POST') {
      const { title, slug, date, content, excerpt, emoji, seoTitle, seoDescription, seoKeywords } = req.body;
      if (!title || !slug || !date || !content) return res.status(400).json({ error: 'Missing required fields' });
      const stmt = db.prepare('INSERT INTO blogs (title, slug, date, content, excerpt, emoji, seoTitle, seoDescription, seoKeywords) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
      stmt.run(title, slug, date, content, excerpt, emoji, seoTitle, seoDescription, seoKeywords);
      return res.status(201).json({ success: true });
    }
    if (req.method === 'PUT') {
      const { id, title, slug, date, content, excerpt, emoji, seoTitle, seoDescription, seoKeywords } = req.body;
      if (!id) return res.status(400).json({ error: 'Missing id' });
      const stmt = db.prepare('UPDATE blogs SET title=?, slug=?, date=?, content=?, excerpt=?, emoji=?, seoTitle=?, seoDescription=?, seoKeywords=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?');
      stmt.run(title, slug, date, content, excerpt, emoji, seoTitle, seoDescription, seoKeywords, id);
      return res.status(200).json({ success: true });
    }
    if (req.method === 'DELETE') {
      const { id } = req.body;
      if (!id) return res.status(400).json({ error: 'Missing id' });
      db.prepare('DELETE FROM blogs WHERE id=?').run(id);
      return res.status(200).json({ success: true });
    }
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error', details: String(err) });
  }
} 