const express = require('express');
const router = express.Router();

const viajeController = require('../controllers/viajeController');
const { verificarSesion, verificarAdmin } = require('../middlewares/loginMiddleware');

router.get('/viajes', verificarSesion, viajeController.mostrarViajes);

router.post('/viajes/agregar', verificarAdmin, viajeController.agregarViaje);

router.post('/viajes/eliminar/:id', verificarAdmin, viajeController.eliminarViaje);

router.get('/viajes/editar/:id',verificarAdmin,viajeController.mostrarEditarViaje);

router.post('/viajes/editar/:id',verificarAdmin,viajeController.actualizarViaje);

module.exports = router;