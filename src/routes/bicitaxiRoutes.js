const express = require('express');
const router = express.Router();

const bicitaxiController = require('../controllers/bicitaxiController');

const { verificarSesion, verificarAdmin } = require('../middlewares/loginMiddleware');

router.get('/dashboard', verificarSesion, (req, res) => {
    res.render('dashboard');
});

router.get('/bicitaxis', verificarSesion, bicitaxiController.mostrarBicitaxis);

router.post('/bicitaxis/agregar', verificarAdmin, bicitaxiController.agregarBicitaxi);

module.exports = router;