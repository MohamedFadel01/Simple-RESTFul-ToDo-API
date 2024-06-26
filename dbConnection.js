const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.DATABASE_PORT,
});

module.exports = pool;
