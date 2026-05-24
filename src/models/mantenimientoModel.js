const connection = require('../config/db');

const getAllMantenimientos = (callback) => {
    const query = `
        SELECT mantenimientos.*, bicitaxis.matricula
        FROM mantenimientos
        INNER JOIN bicitaxis 
        ON mantenimientos.matricula_bicitaxi = bicitaxis.matricula
    `;
    connection.query(query, (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

const agregarMantenimiento = (
    matricula_bicitaxi,
    descripcion,
    fecha_inicio,
    fecha_fin,
    costo,
    estado,
    callback
) => {
    const query = `
        INSERT INTO mantenimientos
        (matricula_bicitaxi, descripcion, fecha_inicio, fecha_fin, costo, estado)
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    connection.query(
        query,
        [
            matricula_bicitaxi,
            descripcion,
            fecha_inicio,
            fecha_fin || null,
            costo || null,
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

const eliminarMantenimiento = (id, callback) => {
    const query = 'DELETE FROM mantenimientos WHERE id_mantenimiento = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

const getMantenimientoById = (id, callback) => {
    const query = 'SELECT * FROM mantenimientos WHERE id_mantenimiento = ?';
    connection.query(query, [id], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }
        callback(null, results[0]);
    });
};

const actualizarMantenimiento = (
    id,
    matricula_bicitaxi,
    descripcion,
    fecha_inicio,
    fecha_fin,
    costo,
    estado,
    callback
) => {
    const query = `
        UPDATE mantenimientos
        SET matricula_bicitaxi = ?, descripcion = ?, fecha_inicio = ?, fecha_fin = ?, costo = ?, estado = ?
        WHERE id_mantenimiento = ?
    `;
    connection.query(
        query,
        [
            matricula_bicitaxi,
            descripcion,
            fecha_inicio,
            fecha_fin || null,
            costo || null,
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
    getAllMantenimientos,
    agregarMantenimiento,
    eliminarMantenimiento,
    getMantenimientoById,
    actualizarMantenimiento
};