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

module.exports = {
    getAllConductores,
    agregarConductor
};