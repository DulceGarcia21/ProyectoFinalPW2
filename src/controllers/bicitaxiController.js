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

const mostrarEditarBicitaxi = (req, res) => {
    const { matricula } = req.params;
    bicitaxiModel.getBicitaxiByMatricula(matricula, (error, bicitaxi) => {
        if (error) {
            console.log(error);
            return res.send('Error al obtener bicitaxi');
        }
        conductorModel.getAllConductores((error, conductores) => {
            if (error) {
                console.log(error);
                return res.send('Error al obtener conductores');
            }
            res.render('editarBicitaxi', {
                bicitaxi: bicitaxi,
                conductores: conductores,
                usuario: req.session.usuario
            });
        });
    });
};

const actualizarBicitaxi = (req, res) => {
    const { matricula } = req.params;
    const { estado, descripcion, id_conductor } = req.body;
    bicitaxiModel.actualizarBicitaxi(
        matricula,
        estado,
        descripcion,
        id_conductor,
        (error) => {
            if (error) {
                console.log(error);
                return res.send('Error al actualizar bicitaxi');
            }
            res.redirect('/bicitaxis');
        }
    );
};

const descargarBicitaxisJSON = (req, res) => {
    bicitaxiModel.getAllBicitaxis((error, bicitaxis) => {
        if (error) {
            console.log(error);
            return res.send('Error al descargar bicitaxis');
        }
        res.setHeader('Content-Disposition', 'attachment; filename=bicitaxis.json');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(bicitaxis, null, 2));
    });
};

const conductorModel = require('../models/conductorModel');

module.exports = {
    mostrarBicitaxis,
    agregarBicitaxi,
    eliminarBicitaxi,
    mostrarEditarBicitaxi,
    actualizarBicitaxi,
    descargarBicitaxisJSON
};