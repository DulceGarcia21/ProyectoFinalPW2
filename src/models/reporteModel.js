const connection = require('../config/db');

const getAllReportes = (callback) => {
    const query = `
        SELECT reportes.*, usuarios.nombre AS usuario_nombre
        FROM reportes
        LEFT JOIN usuarios
        ON reportes.id_usuario = usuarios.id_usuario
    `;
    connection.query(query, (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

const agregarReporte = (
    id_usuario,
    matricula_bicitaxi,
    descripcion,
    estado,
    callback
) => {
    const query = `
        INSERT INTO reportes
        (id_usuario, matricula_bicitaxi, descripcion, estado)
        VALUES (?, ?, ?, ?)
    `;
    connection.query(
        query,
        [
            id_usuario,
            matricula_bicitaxi,
            descripcion,
            estado
        ],
        (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, results);
        }
    );
};

const eliminarReporte = (id, callback) => {
    const query = 'DELETE FROM reportes WHERE id_reporte = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

const getReporteById = (id, callback) => {
    const query = 'SELECT * FROM reportes WHERE id_reporte = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results[0]);
    });
};

const actualizarReporte = (
    id,
    matricula_bicitaxi,
    descripcion,
    estado,
    callback
) => {
    const query = `
        UPDATE reportes
        SET matricula_bicitaxi = ?, descripcion = ?, estado = ?
        WHERE id_reporte = ?
    `;
    connection.query(
        query,
        [
            matricula_bicitaxi,
            descripcion,
            estado,
            id
        ],
        (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, results);
        }
    );
};

module.exports = {
    getAllReportes,
    agregarReporte,
    eliminarReporte,
    getReporteById,
    actualizarReporte
};