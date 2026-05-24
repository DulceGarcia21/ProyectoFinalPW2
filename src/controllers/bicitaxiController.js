const bicitaxiModel = require('../models/bicitaxiModel');

const mostrarBicitaxis = (req, res) => {

    bicitaxiModel.getAllBicitaxis((error, results) => {

        if (error) {
            console.log(error);
            return;
        }

        res.render('bicitaxis', {
            bicitaxis: results,
            usuario: req.session.usuario
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

module.exports = {
    mostrarBicitaxis,
    agregarBicitaxi
};