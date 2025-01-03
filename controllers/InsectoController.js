const Insecto = require('../models/InsectoModels');

// Crear un nuevo insecto
exports.crearInsecto = async (req, res) => {
  try {
    const nuevoInsecto = new Insecto(req.body);
    await nuevoInsecto.save();
    res.status(201).json(nuevoInsecto);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el insecto' });
  }
};

// Obtener todos los insectos
exports.obtenerInsectos = async (req, res) => {
  try {
    const insectos = await Insecto.find().populate('idTipoInsecto');
    res.status(200).json(insectos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los insectos' });
  }
};
