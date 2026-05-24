const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboardController');
const { verificarSesion } = require('../middlewares/loginMiddleware');

router.get('/dashboard', verificarSesion, dashboardController.mostrarDashboard);

module.exports = router;