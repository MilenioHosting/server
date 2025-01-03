const express = require('express');
const mongoose = require('mongoose');
const usuarioRoutes = require('./routes/UsuarioRoutes'); // Importar las rutas de usuario
const empleadoRoutes = require('./routes/EmpleadoRoutes')
const clienteRoutes = require('./routes/ClienteRoutes')
const ordenRoutes = require('./routes/OrdenRoutes')
const tipoInsectoRoutes = require('./routes/TipoInsectoRoutes');
const insectoRoutes = require('./routes/InsectoRoutes');
const insectosGroupRoutes = require('./routes/InsectoGroupRoutes');

const app = express();
app.use(express.json());

// Configura tu URI aquí
const uri = 'mongodb+srv://milenioapphosting:nci5tPIT7ceXZgmg@milenioapp.w4q3y.mongodb.net/?retryWrites=true&w=majority&appName=MilenioApp';

// Conecta a MongoDB usando mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: { version: '1' }, // Configuración de la API estable de MongoDB Atlas
})
  .then(async () => {
    console.log('Conectado a MongoDB');
    // Obtener y mostrar la versión de MongoDB
    const info = await mongoose.connection.db.admin().serverStatus();
    console.log('Versión de MongoDB:', info.version);
  })
  .catch(err => console.log('Error al conectar a MongoDB:', err));



// Usar las rutas
app.use('/api', usuarioRoutes);
app.use('/api',empleadoRoutes)
app.use('/api',clienteRoutes)
app.use('/api',ordenRoutes)
app.use('/api', tipoInsectoRoutes);
app.use('/api', insectoRoutes);
app.use('/api', insectosGroupRoutes);

app.get('/', (req, res) => {
    res.send('API está funcionando');
  });

const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
