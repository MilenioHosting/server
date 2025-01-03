const InsectosGroup = require('../models/InsectoGroupModels');

// Crear un nuevo registro en InsectosGroup
exports.crearInsectosGroup = async (req, res) => {
  try {
    const nuevoInsectosGroup = new InsectosGroup(req.body);
    await nuevoInsectosGroup.save();
    res.status(201).json(nuevoInsectosGroup);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el grupo de insectos' });
  }
};

// Obtener todos los registros de InsectosGroup
exports.obtenerInsectosGroup = async (req, res) => {
  try {
    const insectosGroup = await InsectosGroup.find()
      .populate('idInsecto')
      .populate('idOrden'); // Si Orden es otro modelo
    res.status(200).json(insectosGroup);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los grupos de insectos' });
  }
};
