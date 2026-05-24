const connection = require('../config/db');

const getAllConductores = (callback) => {
    const query = 'SELECT * FROM conductores';

    connection.query(query, (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results);
    });
};

const agregarConductor = (nombre, telefono, licencia, estado, callback) => {
    const query = `
        INSERT INTO conductores(nombre, telefono, licencia, estado)
        VALUES (?, ?, ?, ?)
    `;

    connection.query(query, [nombre, telefono, licencia, estado], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results);
    });
};

const eliminarConductor = (id_conductor, callback) => {
    const query = 'DELETE FROM conductores WHERE id_conductor = ?';
    connection.query(query, [id_conductor], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

module.exports = {
    getAllConductores,
    agregarConductor,
    eliminarConductor
};