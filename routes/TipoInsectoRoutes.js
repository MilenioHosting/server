const express = require('express');
const router = express.Router();
const tipoInsectoController = require('../controllers/TipoInsectoController');

// Crear un nuevo tipo de insecto
router.post('/tipoInsectos', tipoInsectoController.crearTipoInsecto);

// Obtener todos los tipos de insectos
router.get('/tipoInsectos', tipoInsectoController.obtenerTiposInsectos);

module.exports = router;
