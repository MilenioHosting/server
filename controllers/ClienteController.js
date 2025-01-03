const Cliente = require('../models/ClienteModels');

// Crear un nuevo cliente
exports.crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear el cliente', error });
  }
};

// Obtener todos los clientes
exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los clientes', error });
  }
};

// Obtener un cliente por ID
exports.obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.status(200).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el cliente', error });
  }
};

// Actualizar un cliente
exports.actualizarCliente = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve el cliente actualizado
      runValidators: true // Ejecuta validaciones definidas en el schema
    });
    if (!clienteActualizado) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.status(200).json(clienteActualizado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al actualizar el cliente', error });
  }
};

// Eliminar un cliente
exports.eliminarCliente = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!clienteEliminado) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.status(200).json({ mensaje: 'Cliente eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el cliente', error });
  }
};
