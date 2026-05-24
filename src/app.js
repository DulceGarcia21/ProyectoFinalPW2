require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');

require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
    secret: 'clave_secreta_bicitaxis',
    resave: false,
    saveUninitialized: false
}));

// Rutas
const bicitaxiRoutes = require('./routes/bicitaxiRoutes');
const loginRoutes = require('./routes/loginRoutes');
const conductorRoutes = require('./routes/conductorRoutes');
const mantenimientoRoutes = require('./routes/mantenimientoRoutes');
const reporteRoutes = require('./routes/reporteRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

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
app.use('/', loginRoutes);
app.use('/', conductorRoutes);
app.use('/', mantenimientoRoutes);
app.use('/', reporteRoutes);
app.use('/', dashboardRoutes);



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});