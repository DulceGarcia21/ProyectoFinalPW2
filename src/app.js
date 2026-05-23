require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Rutas
const bicitaxiRoutes = require('./routes/bicitaxiRoutes');

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Carpeta pública: CSS, JS, imágenes
app.use(express.static(path.join(__dirname, '../public')));

// usar rutas
app.use('/', bicitaxiRoutes);



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});