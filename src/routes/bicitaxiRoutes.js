const express = require('express');

const router = express.Router();

const bicitaxiController = require('../controllers/bicitaxiController');

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/bicitaxis', bicitaxiController.mostrarBicitaxis);

module.exports = router;