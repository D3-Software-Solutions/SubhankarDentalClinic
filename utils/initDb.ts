import db from './db';
import { blogTableSchema } from './blogSchema';

export function initDb() {
  db.exec(blogTableSchema);
} 