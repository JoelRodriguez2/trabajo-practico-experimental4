# Proyecto TPE4 - Node + PostgreSQL + React

## Descripción
Servidor Node.js con Express conectado a PostgreSQL para un CRUD de usuarios, con frontend en React para registrar y listar usuarios.

---

## Estructura

TPE4-proyecto/
├── TPE4/ ← Backend
│ ├── server.js
│ ├── db.js
│ ├── package.json
│ ├── package-lock.json
│ └── test-db.js
└── react_tpe4/ ← Frontend
├── src/
├── public/
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

yaml
Copiar código

---

## Backend

1. Instalar dependencias:
```bash
npm install
Crear DB y tabla usuarios en PostgreSQL:

sql
Copiar código
CREATE DATABASE usuarios_db;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50),
  correo VARCHAR(100),
  contrasena VARCHAR(100)
);
Configurar db.js con tus credenciales.

Iniciar servidor:

bash
Copiar código
node server.js
URL: http://localhost:3000

Endpoints
GET /usuarios → lista usuarios

POST /usuarios → crea usuario (nombre, correo, contrasena)

Frontend
Instalar dependencias:

bash
Copiar código
npm install
Iniciar React:

bash
Copiar código
npm start
URL: http://localhost:3001

Formulario para crear usuarios y (opcional) listar usuarios desde la DB.
