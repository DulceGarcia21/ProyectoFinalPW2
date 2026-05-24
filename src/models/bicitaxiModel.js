const connection = require('../config/db');

const getAllBicitaxis = (callback) => {

    const query = 'SELECT * FROM bicitaxis';

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

module.exports = {
    getAllBicitaxis,
    agregarBicitaxi
};