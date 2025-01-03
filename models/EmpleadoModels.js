const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema para Empleado
const empleadoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  foto: {
    type: String, // Esto puede ser una URL o el path de la imagen almacenada
    default: null // Es opcional, por eso tiene un valor por defecto de null
  }
}, {
  timestamps: true // Agrega los campos createdAt y updatedAt automáticamente
});

// Crear el modelo de Empleado
const Empleado = mongoose.model('Empleado', empleadoSchema);

module.exports = Empleado;
