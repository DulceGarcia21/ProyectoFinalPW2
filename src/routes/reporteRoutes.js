const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

// Middleware para verificar sesión y rol de usuario
const {verificarSesion,verificarAdmin} = require('../middlewares/loginMiddleware');

// Rutas del sistema de reportes
router.get('/reportes', verificarSesion, reporteController.mostrarReportes);

router.post('/reportes/agregar', verificarSesion, reporteController.agregarReporte);

router.post('/reportes/eliminar/:id', verificarAdmin, reporteController.eliminarReporte);

router.get('/reportes/editar/:id', verificarAdmin, reporteController.mostrarEditarReporte);

router.post('/reportes/editar/:id', verificarAdmin, reporteController.actualizarReporte);

router.get('/reportes/descargar/json', verificarAdmin, reporteController.descargarReportesJSON);

module.exports = router;