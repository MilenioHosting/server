const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/EmpleadoController');

// Crear un nuevo empleado
router.post('/empleados', empleadoController.crearEmpleado);

// Obtener todos los empleados
router.get('/empleados', empleadoController.obtenerEmpleados);

// Obtener un empleado por ID
router.get('/empleados/:id', empleadoController.obtenerEmpleadoPorId);

// Actualizar un empleado por ID
router.put('/empleados/:id', empleadoController.actualizarEmpleado);

// Eliminar un empleado por ID
router.delete('/empleados/:id', empleadoController.eliminarEmpleado);

module.exports = router;
