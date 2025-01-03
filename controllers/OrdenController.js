const Orden = require('../models/OrdenModels');

// Crear una nueva orden
exports.crearOrden = async (req, res) => {
  try {
    const nuevaOrden = new Orden(req.body);
    await nuevaOrden.save();
    res.status(201).json(nuevaOrden);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear la orden', error });
  }
};

// Obtener todas las órdenes
exports.obtenerOrdenes = async (req, res) => {
  try {
    const ordenes = await Orden.find();
    res.status(200).json(ordenes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener las órdenes', error });
  }
};

// Obtener una orden por ID
exports.obtenerOrdenPorId = async (req, res) => {
  try {
    const orden = await Orden.findById(req.params.id);
    if (!orden) {
      return res.status(404).json({ mensaje: 'Orden no encontrada' });
    }
    res.status(200).json(orden);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener la orden', error });
  }
};

// Actualizar una orden por ID
exports.actualizarOrden = async (req, res) => {
  try {
    const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve la orden actualizada
      runValidators: true // Ejecuta validaciones definidas en el schema
    });
    if (!ordenActualizada) {
      return res.status(404).json({ mensaje: 'Orden no encontrada' });
    }
    res.status(200).json(ordenActualizada);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al actualizar la orden', error });
  }
};

// Eliminar una orden por ID
exports.eliminarOrden = async (req, res) => {
  try {
    const ordenEliminada = await Orden.findByIdAndDelete(req.params.id);
    if (!ordenEliminada) {
      return res.status(404).json({ mensaje: 'Orden no encontrada' });
    }
    res.status(200).json({ mensaje: 'Orden eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar la orden', error });
  }
};
