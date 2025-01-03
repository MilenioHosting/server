const mongoose = require('mongoose');

// Definir el esquema de 'usuario'
const usuarioSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  correo: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  idDevice: {
    type: String,
    required: true
  },
  aprobado: {
    type: String,
    required: true
  }
});

// Crear el modelo 'Usuario' basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
