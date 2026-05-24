const express = require('express');

const router = express.Router();

const bicitaxiController = require('../controllers/bicitaxiController');
const { verificarSesion } = require('../middlewares/loginMiddleware');

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/bicitaxis', bicitaxiController.mostrarBicitaxis);

router.get(
    '/dashboard',
    verificarSesion,
    (req, res) => {
        res.render('dashboard');
    }
);

router.post(
    '/bicitaxis/agregar',
    verificarAdmin,
    bicitaxiController.agregarBicitaxi
);

module.exports = router;