const express = require('express');
const router = express.Router();
const Usuario = require('../models/UsuarioModels');

const usuarioController = require('../controllers/UsuarioController'); 

// Ruta para crear un nuevo usuario
router.post('/usuario', async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).send(nuevoUsuario);
  } catch (error) {
    res.status(400).send(error);
  }
});


// Ruta para obtener todos los usuarios
router.get('/usuario', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).send(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para crear un nuevo usuario
router.post('/usuarios', usuarioController.crearUsuario);

// Ruta para obtener todos los usuarios
router.get('/usuarios', usuarioController.obtenerUsuarios);

// Ruta para obtener un usuario por ID
router.get('/usuarios/:id', usuarioController.obtenerUsuarioPorId);

// Ruta para actualizar un usuario
router.put('/usuarios/:id', usuarioController.actualizarUsuario);

// Ruta para eliminar un usuario
router.delete('/usuarios/:id', usuarioController.eliminarUsuario);

//Ruta para consultar usuario
router.get('/usuario/login',usuarioController.loginUsuario);

// Exportar el router
module.exports = router;
