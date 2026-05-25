const viajeModel = require('../models/viajeModel');
const bicitaxiModel = require('../models/bicitaxiModel');

const mostrarViajes = (req, res) => {
    viajeModel.getAllViajes((error, viajes) => {
        if (error) {
            console.log(error);
            return res.send('Error al obtener viajes');
        }
        bicitaxiModel.getAllBicitaxis((error, bicitaxis) => {
            if (error) {
                console.log(error);
                return res.send('Error al obtener bicitaxis');
            }
            res.render('viajes', {
                viajes: viajes,
                bicitaxis: bicitaxis,
                usuario: req.session.usuario
            });
        });
    });
};

const agregarViaje = (req, res) => {
    const {
        matricula_bicitaxi,
        fecha_salida,
        fecha_llegada,
        estado,
        observaciones
    } = req.body;
    viajeModel.agregarViaje(
        matricula_bicitaxi,
        fecha_salida,
        fecha_llegada,
        estado,
        observaciones,
        (error) => {
            if (error) {
                console.log(error);
                return res.send('Error al agregar viaje');
            }
            res.redirect('/viajes');
        }
    );
};

const eliminarViaje = (req, res) => {
    const { id } = req.params;
    viajeModel.eliminarViaje(id, (error) => {
        if (error) {
            console.log(error);
            return res.send('Error al eliminar viaje');
        }
        res.redirect('/viajes');
    });
};

module.exports = {
    mostrarViajes,
    agregarViaje,
    eliminarViaje
};