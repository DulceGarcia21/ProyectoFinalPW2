const express = require('express');
const router = express.Router();

const conductorController = require('../controllers/conductorController');
const { verificarSesion, verificarAdmin } = require('../middlewares/loginMiddleware');

router.get('/conductores', verificarSesion, conductorController.mostrarConductores);

router.post('/conductores/agregar', verificarAdmin, conductorController.agregarConductor);

router.post('/conductores/eliminar/:id', verificarAdmin, conductorController.eliminarConductor);

router.get('/conductores/editar/:id', verificarAdmin,conductorController.mostrarEditarConductor);

router.post('/conductores/editar/:id',verificarAdmin,conductorController.actualizarConductor);

router.get('/conductores/descargar/json',verificarSesion,verificarAdmin,conductorController.descargarConductoresJSON);

module.exports = router;