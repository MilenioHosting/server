const Empleado = require('../models/EmpleadoModels');

// Crear un nuevo empleado
exports.crearEmpleado = async (req, res) => {
  try {
    const nuevoEmpleado = new Empleado(req.body);
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al crear el empleado', error });
  }
};

// Obtener todos los empleados
exports.obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los empleados', error });
  }
};

// Obtener un empleado por ID
exports.obtenerEmpleadoPorId = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.status(200).json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el empleado', error });
  }
};

// Actualizar un empleado por ID
exports.actualizarEmpleado = async (req, res) => {
  try {
    const empleadoActualizado = await Empleado.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devuelve el empleado actualizado
      runValidators: true // Ejecuta validaciones definidas en el schema
    });
    if (!empleadoActualizado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.status(200).json(empleadoActualizado);
  } catch (error) {
    console.error(error);
    res.status(400).json({ mensaje: 'Error al actualizar el empleado', error });
  }
};

// Eliminar un empleado por ID
exports.eliminarEmpleado = async (req, res) => {
  try {
    const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleadoEliminado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }
    res.status(200).json({ mensaje: 'Empleado eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el empleado', error });
  }
};
