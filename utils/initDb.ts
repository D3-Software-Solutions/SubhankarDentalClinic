const db = require('./db');
const { blogTableSchema } = require('./blogSchema');

function initDb() {
  db.exec(blogTableSchema);
}

module.exports = { initDb }; 