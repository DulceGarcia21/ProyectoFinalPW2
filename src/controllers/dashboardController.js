const dashboardModel = require('../models/dashboardModel');

const mostrarDashboard = (req, res) => {
    dashboardModel.getResumenDashboard((error, resumen) => {
        if (error) {
            console.log(error);
            return res.send('Error al cargar dashboard');
        }

        res.render('dashboard', {
            resumen: resumen,
            usuario: req.session.usuario
        });
    });
};

module.exports = {
    mostrarDashboard
};