export const blogTableSchema = `
CREATE TABLE IF NOT EXISTS blogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  date TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  seoTitle TEXT,
  seoDescription TEXT,
  seoKeywords TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
);
`;

// Testimonials table (images are optional, testimonial text required)
export const testimonialTableSchema = `
CREATE TABLE IF NOT EXISTS testimonials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  testimonial TEXT NOT NULL,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP
);
`;

// Testimonial images (optional, can be zero or more per testimonial)
export const testimonialImageTableSchema = `
CREATE TABLE IF NOT EXISTS testimonial_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  testimonial_id INTEGER NOT NULL,
  image_url TEXT,
  FOREIGN KEY(testimonial_id) REFERENCES testimonials(id) ON DELETE CASCADE
);
`;

// Blog images (optional, can be zero or more per blog)
export const blogImageTableSchema = `
CREATE TABLE IF NOT EXISTS blog_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  blog_id INTEGER NOT NULL,
  image_url TEXT,
  FOREIGN KEY(blog_id) REFERENCES blogs(id) ON DELETE CASCADE
);
`; 