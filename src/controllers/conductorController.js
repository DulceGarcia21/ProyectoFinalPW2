const conductorModel = require('../models/conductorModel');

const mostrarConductores = (req, res) => {
    conductorModel.getAllConductores((error, results) => {
        if (error) {
            console.log(error);
            return res.send('Error al obtener conductores');
        }

        res.render('conductores', {
            conductores: results,
            usuario: req.session.usuario
        });
    });
};

const agregarConductor = (req, res) => {
    const { nombre, telefono, licencia, estado } = req.body;

    conductorModel.agregarConductor(nombre, telefono, licencia, estado, (error) => {
        if (error) {
            console.log(error);
            return res.send('Error al agregar conductor');
        }

        res.redirect('/conductores');
    });
};

const eliminarConductor = (req, res) => {
    const { id } = req.params;
    conductorModel.eliminarConductor(id, (error) => {
        if (error) {
            console.log(error);
            return res.send('Error al eliminar conductor');
        }
        res.redirect('/conductores');
    });
};

module.exports = {
    mostrarConductores,
    agregarConductor,
    eliminarConductor
};