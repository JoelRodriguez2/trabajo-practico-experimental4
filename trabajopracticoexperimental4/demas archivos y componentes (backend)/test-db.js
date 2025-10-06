// test-db.js
const db = require('./db');

(async () => {
  try {
    const res = await db.query('SELECT * FROM usuarios;');
    console.log('Filas encontradas:', res.rowCount);
    console.log(res.rows);
    process.exit(0);
  } catch (err) {
    console.error('Error en test-db:', err);
    process.exit(1);
  }
})();
