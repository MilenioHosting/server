const express = require('express');
const router = express.Router();
const insectoController = require('../controllers/InsectoController');

// Crear un nuevo insecto
router.post('/insectos', insectoController.crearInsecto);

// Obtener todos los insectos
router.get('/insectos', insectoController.obtenerInsectos);

module.exports = router;
