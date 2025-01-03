const mongoose = require('mongoose');

// Definir el esquema para Cliente
const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  NIT: {
    type: String,
    required: true,
    unique: true
  },
  direccion: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  nombreContacto: {
    type: String,
    required: true
  },
  sede: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido']
  },
  idTipo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoCliente',
    required: true
  }
}, {
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

// Crear el modelo de Cliente
const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
