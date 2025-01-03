const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insectoGroupSchema = new Schema({
  idOrden: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Orden', // Hace referencia a la colección de Orden
    required: true
  },
  idInsecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Insecto', // Hace referencia a la colección de Insecto
    required: true
  },
  hallado: {
    type: String,
    required: true
  },
  nivelInfestacion: {
    type: String,
    required: false
  }
});

const InsectoGroup = mongoose.model('InsectoGroup', insectoGroupSchema);
module.exports = InsectoGroup;
