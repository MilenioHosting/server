const express = require('express');
const router = express.Router();
const insectosGroupController = require('../controllers/InsectoGroupController');

// Crear un nuevo grupo de insectos
router.post('/insectosGroup', insectosGroupController.crearInsectosGroup);

// Obtener todos los grupos de insectos
router.get('/insectosGroup', insectosGroupController.obtenerInsectosGroup);

module.exports = router;
