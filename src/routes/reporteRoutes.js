const express = require('express');

const router = express.Router();

const reporteController = require('../controllers/reporteController');

const {
    verificarSesion,
    verificarAdmin
} = require('../middlewares/loginMiddleware');

router.get(
    '/reportes',
    verificarSesion,
    reporteController.mostrarReportes
);

router.post(
    '/reportes/agregar',
    verificarSesion,
    reporteController.agregarReporte
);

router.post(
    '/reportes/eliminar/:id',
    verificarAdmin,
    reporteController.eliminarReporte
);

router.get(
    '/reportes/editar/:id',
    verificarAdmin,
    reporteController.mostrarEditarReporte
);

router.post(
    '/reportes/editar/:id',
    verificarAdmin,
    reporteController.actualizarReporte
);

module.exports = router;