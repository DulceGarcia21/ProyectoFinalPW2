const bicitaxiModel = require('../models/bicitaxiModel');

const mostrarBicitaxis = (req, res) => {
    bicitaxiModel.getAllBicitaxis((error, bicitaxis) => {
        if (error) {
            console.log(error);
            return;
        }
        conductorModel.getAllConductores((error, conductores) => {
            if (error) {
                console.log(error);
                return;
            }
            res.render('bicitaxis', {
                bicitaxis: bicitaxis,
                conductores: conductores,
                usuario: req.session.usuario
            });
        });
    });
};

const agregarBicitaxi = (req, res) => {
    const { matricula, estado, descripcion, id_conductor } = req.body;
    bicitaxiModel.agregarBicitaxi(
        matricula,
        estado,
        descripcion,
        id_conductor,
        (error) => {
            if (error) {
                console.log(error);
                return res.send('Error al agregar bicitaxi');
            }
            res.redirect('/bicitaxis');
        }
    );
};

const eliminarBicitaxi = (req, res) => {
    const { matricula } = req.params;

    bicitaxiModel.eliminarBicitaxi(matricula, (error) => {
        if (error) {
            console.log(error);
            return res.send('Error al eliminar bicitaxi');
        }

        res.redirect('/bicitaxis');
    });
};

const conductorModel = require('../models/conductorModel');

module.exports = {
    mostrarBicitaxis,
    agregarBicitaxi,
    eliminarBicitaxi
};