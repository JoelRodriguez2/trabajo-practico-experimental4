// src/App.js
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !correo || !contrasena) {
      alert('Todos los campos son obligatorios');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/usuarios', {
        nombre,
        correo,
        contrasena
      });

      console.log('Usuario creado:', res.data);
      alert(`Usuario ${res.data.nombre} creado correctamente`);

      // Limpiar formulario
      setNombre('');
      setCorreo('');
      setContrasena('');
    } catch (err) {
      console.error('Error al crear usuario:', err);
      alert('Error al crear usuario');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Formulario de Usuarios</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <button type="submit" style={{ padding: '8px', cursor: 'pointer' }}>Crear Usuario</button>
      </form>
    </div>
  );
}

export default App;
