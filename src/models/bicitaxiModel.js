const connection = require('../config/db');

const getAllBicitaxis = (callback) => {
    const query = `
        SELECT bicitaxis.*, conductores.nombre AS nombre_conductor
        FROM bicitaxis
        LEFT JOIN conductores
        ON bicitaxis.id_conductor = conductores.id_conductor
    `;
    connection.query(query, (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

const agregarBicitaxi = (matricula, estado, descripcion, id_conductor, callback) => {
    const query = `
        INSERT INTO bicitaxis(matricula, estado, descripcion, id_conductor)
        VALUES (?, ?, ?, ?)
    `;
    connection.query(query, [matricula, estado, descripcion, id_conductor || null], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

const eliminarBicitaxi = (matricula, callback) => {
    const query = 'DELETE FROM bicitaxis WHERE matricula = ?';
    connection.query(query, [matricula], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

const getBicitaxiByMatricula = (matricula, callback) => {
    const query = 'SELECT * FROM bicitaxis WHERE matricula = ?';
    connection.query(query, [matricula], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results[0]);
    });
};

const actualizarBicitaxi = (matricula, estado, descripcion, id_conductor, callback) => {
    const query = `
        UPDATE bicitaxis
        SET estado = ?, descripcion = ?, id_conductor = ?
        WHERE matricula = ?
    `;
    connection.query(query, [estado, descripcion, id_conductor || null, matricula], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

module.exports = {
    getAllBicitaxis,
    agregarBicitaxi,
    eliminarBicitaxi,
    getBicitaxiByMatricula,
    actualizarBicitaxi
};