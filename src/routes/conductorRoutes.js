const express = require('express');
const router = express.Router();

const conductorController = require('../controllers/conductorController');
const { verificarSesion, verificarAdmin } = require('../middlewares/loginMiddleware');

router.get('/conductores', verificarSesion, conductorController.mostrarConductores);

router.post('/conductores/agregar', verificarAdmin, conductorController.agregarConductor);

router.post(
    '/conductores/eliminar/:id',
    verificarAdmin,
    conductorController.eliminarConductor
);

module.exports = router;