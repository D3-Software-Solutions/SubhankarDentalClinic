const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(process.cwd(), 'dentique.sqlite');
const db = new Database(dbPath);

module.exports = db; 