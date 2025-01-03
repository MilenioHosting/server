const express = require('express');
const router = express.Router();
const ordenController = require('../controllers/OrdenController');

// Crear una nueva orden
router.post('/ordenes', ordenController.crearOrden);

// Obtener todas las órdenes
router.get('/ordenes', ordenController.obtenerOrdenes);

// Obtener una orden por ID
router.get('/ordenes/:id', ordenController.obtenerOrdenPorId);

// Actualizar una orden por ID
router.put('/ordenes/:id', ordenController.actualizarOrden);

// Eliminar una orden por ID
router.delete('/ordenes/:id', ordenController.eliminarOrden);

module.exports = router;
