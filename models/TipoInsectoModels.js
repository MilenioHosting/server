const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipoInsectoSchema = new Schema({
  descripcion: {
    type: String,
    required: true
  },
  abreviado: {
    type: String,
    required: false
  }
});

const TipoInsecto = mongoose.model('TipoInsecto', tipoInsectoSchema);
module.exports = TipoInsecto;
