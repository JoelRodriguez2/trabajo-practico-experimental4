// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); // Importamos la conexión a PostgreSQL
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // permite recibir JSON en las peticiones

// Ruta raíz
app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Servidor Express funcionando correctamente 🚀' });
});

// GET /usuarios - listar todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM usuarios;');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// POST /usuarios - crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  if (!nombre || !correo || !contrasena) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const result = await db.query(
      'INSERT INTO usuarios (nombre, correo, contrasena) VALUES ($1, $2, $3) RETURNING *;',
      [nombre, correo, contrasena]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error al crear usuario:', err);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
