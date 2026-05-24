const express = require('express');

const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/bicitaxis', (req, res) => {
    res.render('bicitaxis/list');
});

module.exports = router;