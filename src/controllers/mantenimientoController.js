const mantenimientoModel = require('../models/mantenimientoModel');
const bicitaxiModel = require('../models/bicitaxiModel');

const mostrarMantenimientos = (req, res) => {
    mantenimientoModel.getAllMantenimientos((error, mantenimientos) => {
        if (error) {
            console.log(error);
            return res.send('Error al obtener mantenimientos');
        }
        bicitaxiModel.getAllBicitaxis((error, bicitaxis) => {
            if (error) {
                console.log(error);
                return res.send('Error al obtener bicitaxis');
            }
            res.render('mantenimientos', {
                mantenimientos: mantenimientos,
                bicitaxis: bicitaxis,
                usuario: req.session.usuario
            });
        });
    });
};

const agregarMantenimiento = (req, res) => {
    const {
        matricula_bicitaxi,
        descripcion,
        fecha_inicio,
        fecha_fin,
        costo,
        estado
    } = req.body;
    mantenimientoModel.agregarMantenimiento(
        matricula_bicitaxi,
        descripcion,
        fecha_inicio,
        fecha_fin,
        costo,
        estado,
        (error) => {
            if (error) {
                console.log(error);
                return res.send('Error al agregar mantenimiento');
            }
            res.redirect('/mantenimientos');
        }
    );
};

const eliminarMantenimiento = (req, res) => {
    const { id } = req.params;
    mantenimientoModel.eliminarMantenimiento(id, (error) => {
        if (error) {
            console.log(error);
            return res.send('Error al eliminar mantenimiento');
        }
        res.redirect('/mantenimientos');
    });
};

const mostrarEditarMantenimiento = (req, res) => {
    const { id } = req.params;

    mantenimientoModel.getMantenimientoById(id, (error, mantenimiento) => {
        if (error) {
            console.log(error);
            return res.send('Error al obtener mantenimiento');
        }

        bicitaxiModel.getAllBicitaxis((error, bicitaxis) => {
            if (error) {
                console.log(error);
                return res.send('Error al obtener bicitaxis');
            }

            res.render('editarMantenimiento', {
                mantenimiento: mantenimiento,
                bicitaxis: bicitaxis,
                usuario: req.session.usuario
            });
        });
    });
};

const actualizarMantenimiento = (req, res) => {
    const { id } = req.params;

    const {
        matricula_bicitaxi,
        descripcion,
        fecha_inicio,
        fecha_fin,
        costo,
        estado
    } = req.body;

    mantenimientoModel.actualizarMantenimiento(
        id,
        matricula_bicitaxi,
        descripcion,
        fecha_inicio,
        fecha_fin,
        costo,
        estado,
        (error) => {
            if (error) {
                console.log(error);
                return res.send('Error al actualizar mantenimiento');
            }

            res.redirect('/mantenimientos');
        }
    );
};

const descargarMantenimientosJSON = (req,res) => {
    mantenimientoModel.getAllMantenimientos((error,mantenimientos) => {
        if(error){
            console.log(error);
            return res.send('Error al descargar mantenimientos');
        }
        res.setHeader('Content-Disposition','attachment; filename=mantenimientos.json');
        res.setHeader('Content-Type','application/json');
        res.send(JSON.stringify(mantenimientos,null,2));
    });
};

module.exports = {
    mostrarMantenimientos,
    agregarMantenimiento,
    eliminarMantenimiento,
    mostrarEditarMantenimiento,
    actualizarMantenimiento,
    descargarMantenimientosJSON
};