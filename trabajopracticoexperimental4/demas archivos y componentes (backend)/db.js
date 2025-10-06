// db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD || '',
  database: process.env.PGDATABASE || 'usuarios_db',
  port: process.env.PGPORT ? Number(process.env.PGPORT) : 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

pool.on('error', (err) => {
  console.error('Error inesperado en el cliente de Postgres', err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};
