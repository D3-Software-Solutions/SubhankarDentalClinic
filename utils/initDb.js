const db = require('./db');
const { blogTableSchema, testimonialTableSchema, testimonialImageTableSchema, blogImageTableSchema } = require('./blogSchema');

function initDb() {
  db.exec(blogTableSchema);
  db.exec(testimonialTableSchema);
  db.exec(testimonialImageTableSchema);
  db.exec(blogImageTableSchema);
}

module.exports = { initDb }; 