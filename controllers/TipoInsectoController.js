const TipoInsecto = require('../models/tipoInsectoModels');

// Crear un nuevo tipo de insecto
exports.crearTipoInsecto = async (req, res) => {
  try {
    const nuevoTipoInsecto = new TipoInsecto(req.body);
    await nuevoTipoInsecto.save();
    res.status(201).json(nuevoTipoInsecto);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el tipo de insecto' });
  }
};

// Obtener todos los tipos de insectos
exports.obtenerTiposInsectos = async (req, res) => {
  try {
    const tiposInsectos = await TipoInsecto.find();
    res.status(200).json(tiposInsectos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los tipos de insectos' });
  }
};
