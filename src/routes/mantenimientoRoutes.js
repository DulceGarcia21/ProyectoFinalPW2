const express = require('express');
const router = express.Router();

const mantenimientoController = require('../controllers/mantenimientoController');
const { verificarSesion, verificarAdmin } = require('../middlewares/loginMiddleware');

router.get('/mantenimientos',verificarSesion,mantenimientoController.mostrarMantenimientos);

router.post( '/mantenimientos/agregar',verificarAdmin,mantenimientoController.agregarMantenimiento);

router.post('/mantenimientos/eliminar/:id',verificarAdmin,mantenimientoController.eliminarMantenimiento);

router.get('/mantenimientos/editar/:id',verificarAdmin,mantenimientoController.mostrarEditarMantenimiento);

router.post('/mantenimientos/editar/:id', verificarAdmin,mantenimientoController.actualizarMantenimiento);

router.get('/mantenimientos/descargar/json',verificarAdmin,mantenimientoController.descargarMantenimientosJSON);

module.exports = router;