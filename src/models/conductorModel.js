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

const getConductorById = (id, callback) => {
    const query = 'SELECT * FROM conductores WHERE id_conductor = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results[0]);
    });
};

const actualizarConductor = (
    id,
    nombre,
    telefono,
    licencia,
    estado,
    callback
) => {
    const query = `
        UPDATE conductores
        SET nombre = ?, telefono = ?, licencia = ?, estado = ?
        WHERE id_conductor = ?
    `;
    connection.query(
        query,
        [nombre, telefono, licencia, estado, id],
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
    getAllConductores,
    agregarConductor,
    eliminarConductor,
    getConductorById,
    actualizarConductor
};