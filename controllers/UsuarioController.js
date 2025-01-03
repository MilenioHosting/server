const Usuario = require('../models/UsuarioModels');

// Controlador para crear un nuevo usuario
const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body); // Crear el usuario con los datos de la solicitud
    await nuevoUsuario.save(); // Guardar el usuario en la base de datos
    res.status(201).json(nuevoUsuario); // Enviar respuesta al cliente con el usuario creado
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el usuario', error });
  }
};

// Controlador para obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find(); // Obtener todos los usuarios de la base de datos
    res.status(200).json(usuarios); // Enviar respuesta al cliente con los usuarios
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

// Controlador para obtener un usuario por ID
const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id); // Obtener el usuario por ID
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario); // Enviar respuesta con el usuario encontrado
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

// Controlador para actualizar un usuario
const actualizarUsuario = async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuarioActualizado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el usuario', error });
  }
};

// Controlador para eliminar un usuario
const eliminarUsuario = async (req, res) => {
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioEliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error });
  }
};
// Controlador para verificar usuario en el login
const loginUsuario = async (req, res) => {
    try {
      const { correo, password } = req.body; // Obtener el correo y la contraseña del cuerpo de la solicitud
      const usuario = await Usuario.findOne({ correo, password }); // Buscar usuario que coincida con el correo y contraseña
  
      if (!usuario) {
        return res.status(401).json({ message: 'Usuario o contraseña incorrectos' }); // Si no existe, enviar error
      }
  
      res.status(200).json({ message: 'Login exitoso', usuario }); // Si existe, enviar éxito y datos del usuario
    } catch (error) {
      res.status(500).json({ message: 'Error al verificar el usuario', error });
    }
  };
  
  
// Exportar los controladores para que se puedan usar en las rutas
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
  loginUsuario
};
