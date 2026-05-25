const reporteModel = require('../models/reporteModel');
const bicitaxiModel = require('../models/bicitaxiModel');

const mostrarReportes = (req, res) => {
    reporteModel.getAllReportes((error, reportes) => {
        if (error) {
            console.log(error);
            return res.send('Error al obtener reportes');
        }
        bicitaxiModel.getAllBicitaxis((error, bicitaxis) => {
            if (error) {
                console.log(error);
                return res.send('Error al obtener bicitaxis');
            }
            res.render('reportes', {
                reportes: reportes,
                bicitaxis: bicitaxis,
                usuario: req.session.usuario
            });
        });
    });
};

const agregarReporte = (req, res) => {
    const {
        matricula_bicitaxi,
        descripcion,
        estado
    } = req.body;
    const id_usuario = req.session.usuario.id;
    reporteModel.agregarReporte(
        id_usuario,
        matricula_bicitaxi,
        descripcion,
        estado,
        (error) => {
            if (error) {
                console.log(error);
                return res.send('Error al agregar reporte');
            }
            res.redirect('/reportes');
        }
    );
};

const eliminarReporte = (req, res) => {
    const { id } = req.params;
    reporteModel.eliminarReporte(id, (error) => {
        if (error) {
            console.log(error);
            return res.send('Error al eliminar reporte');
        }
        res.redirect('/reportes');
    });
};

const mostrarEditarReporte = (req, res) => {
    const { id } = req.params;
    reporteModel.getReporteById(id, (error, reporte) => {
        if (error) {
            console.log(error);
            return res.send('Error al obtener reporte');
        }
        bicitaxiModel.getAllBicitaxis((error, bicitaxis) => {
            if (error) {
                console.log(error);
                return res.send('Error al obtener bicitaxis');
            }
            res.render('editarReporte', {
                reporte: reporte,
                bicitaxis: bicitaxis,
                usuario: req.session.usuario
            });
        });
    });
};

const actualizarReporte = (req, res) => {
    const { id } = req.params;
    const {
        matricula_bicitaxi,
        descripcion,
        estado
    } = req.body;
    reporteModel.actualizarReporte(
        id,
        matricula_bicitaxi,
        descripcion,
        estado,
        (error) => {
            if (error) {
                console.log(error);
                return res.send('Error al actualizar reporte');
            }
            res.redirect('/reportes');
        }
    );
};

const descargarReportesJSON = (req,res) => {
    reporteModel.getAllReportes((error,reportes) => {
        if(error){
            console.log(error);
            return res.send('Error al descargar reportes');
        }
        res.setHeader('Content-Disposition','attachment; filename=reportes.json');
        res.setHeader('Content-Type','application/json');
        res.send(JSON.stringify(reportes,null,2));
    });
};

module.exports = {
    mostrarReportes,
    agregarReporte,
    eliminarReporte,
    mostrarEditarReporte,
    actualizarReporte,
    descargarReportesJSON
};