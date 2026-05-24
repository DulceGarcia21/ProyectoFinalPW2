const connection = require('../config/db');

const buscarUsuarioPorCorreo = (correo, callback) => {
    const query = 'SELECT * FROM usuarios WHERE correo = ?';

    connection.query(query, [correo], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results[0]);
    });
};

module.exports = {
    buscarUsuarioPorCorreo
};