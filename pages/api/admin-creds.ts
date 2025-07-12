import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const credsPath = path.join(process.cwd(), 'admin_creds.txt');
    const content = fs.readFileSync(credsPath, 'utf-8');
    const lines = content.split('\n');
    const username = lines[0].split(':')[1].trim();
    const password = lines[1].split(':')[1].trim();
    res.status(200).json({ username, password });
  } catch (err) {
    res.status(500).json({ error: 'Could not read credentials' });
  }
} 