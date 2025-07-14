import db from './db';
import { blogTableSchema, testimonialTableSchema, testimonialImageTableSchema, blogImageTableSchema } from './blogSchema';

export function initDb() {
  db.exec(blogTableSchema);
  db.exec(testimonialTableSchema);
  db.exec(testimonialImageTableSchema);
  db.exec(blogImageTableSchema);
} 