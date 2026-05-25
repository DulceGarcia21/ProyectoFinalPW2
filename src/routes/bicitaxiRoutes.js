const express = require('express');
const router = express.Router();

const bicitaxiController = require('../controllers/bicitaxiController');

const { verificarSesion, verificarAdmin } = require('../middlewares/loginMiddleware');

router.get('/bicitaxis', verificarSesion, bicitaxiController.mostrarBicitaxis);

router.post('/bicitaxis/agregar', verificarAdmin, bicitaxiController.agregarBicitaxi);

router.post('/bicitaxis/eliminar/:matricula', verificarAdmin, bicitaxiController.eliminarBicitaxi);

router.get('/bicitaxis/editar/:matricula', verificarAdmin, bicitaxiController.mostrarEditarBicitaxi);

router.post('/bicitaxis/editar/:matricula', verificarAdmin, bicitaxiController.actualizarBicitaxi);

module.exports = router;