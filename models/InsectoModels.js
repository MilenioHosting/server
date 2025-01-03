const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insectoSchema = new Schema({
  descripcion: {
    type: String,
    required: true
  },
  idTipoInsecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TipoInsecto', // Hace referencia a la colección de TipoInsecto
    required: true
  }
});

const Insecto = mongoose.model('Insecto', insectoSchema);
module.exports = Insecto;
