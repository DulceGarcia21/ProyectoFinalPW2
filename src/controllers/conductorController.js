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

const mostrarEditarConductor = (req, res) => {
    const { id } = req.params;
    conductorModel.getConductorById(id, (error, conductor) => {
        if (error) {
            console.log(error);
            return res.send('Error al obtener conductor');
        }
        res.render('editarConductor', {
            conductor: conductor,
            usuario: req.session.usuario
        });
    });
};

const actualizarConductor = (req, res) => {
    const { id } = req.params;
    const {
        nombre,
        telefono,
        licencia,
        estado
    } = req.body;
    conductorModel.actualizarConductor(
        id,
        nombre,
        telefono,
        licencia,
        estado,
        (error) => {
            if (error) {
                console.log(error);
                return res.send('Error al actualizar conductor');
            }
            res.redirect('/conductores');
        }
    );
};

module.exports = {
    mostrarConductores,
    agregarConductor,
    eliminarConductor,
    mostrarEditarConductor,
    actualizarConductor
};