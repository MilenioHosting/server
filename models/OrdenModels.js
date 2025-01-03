const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordenSchema = new Schema({
  idEmpleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empleado', // Referencia a la colección Empleado
    required: true
  },
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaUsuario: {
    type: Date,
    required: true
  },
  idUsuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Referencia a la colección Usuario
    required: true
  },
  serial: {
    type: String,
    required: false
  },
  operario: {
    type: String,
    required: true
  },
  horaIngreso: {
    type: Date,
    required: true
  },
  horaSalida: {
    type: Date,
    required: false
  },
  observacionesTecnicas: {
    type: String,
    required: false
  },
  correctivos: {
    type: String,
    required: false
  },
  firmaOperario: {
    type: String,
    required: false
  },
  firmaAyudante: {
    type: String,
    required: false
  },
  tipoServicio: {
    type: String,
    required: true
  },
  objetivoDelServicio: {
    type: String,
    required: false
  },
  estadoEnvio: {
    type: String,
    required: false
  },
  tipoOrden: {
    type: String,
    required: true
  }
});

const Orden = mongoose.model('Orden', ordenSchema);
module.exports = Orden;
