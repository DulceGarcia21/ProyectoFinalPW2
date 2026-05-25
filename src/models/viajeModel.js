const connection = require('../config/db');

const getAllViajes = (callback) => {
    const query = 'SELECT * FROM viajes';
    connection.query(query, (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};
const agregarViaje = (matricula_bicitaxi, fecha_salida, fecha_llegada, estado, observaciones, callback) => {
    const query = `
        INSERT INTO viajes(matricula_bicitaxi, fecha_salida, fecha_llegada, estado, observaciones)
        VALUES (?, ?, ?, ?, ?)
    `;
    connection.query(
        query,
        [matricula_bicitaxi, fecha_salida, fecha_llegada || null, estado, observaciones],
        (error, results) => {
            if (error) {
                callback(error, null);
                return;
            }
            callback(null, results);
        }
    );
};

const eliminarViaje = (id, callback) => {
    const query = 'DELETE FROM viajes WHERE id_viaje = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

const getViajeById = (id, callback) => {
    const query = 'SELECT * FROM viajes WHERE id_viaje = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results[0]);
    });
};

const actualizarViaje = (
    id,
    matricula_bicitaxi,
    fecha_salida,
    fecha_llegada,
    estado,
    observaciones,
    callback
) => {
    const query = `
        UPDATE viajes
        SET matricula_bicitaxi = ?, fecha_salida = ?, fecha_llegada = ?, estado = ?, observaciones = ?
        WHERE id_viaje = ?
    `;

    connection.query(
        query,
        [
            matricula_bicitaxi,
            fecha_salida,
            fecha_llegada || null,
            estado,
            observaciones,
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
    getAllViajes,
    agregarViaje,
    eliminarViaje,
    getViajeById,
    actualizarViaje
};