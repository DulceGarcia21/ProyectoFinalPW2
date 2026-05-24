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

const registrarUsuario = (nombre, correo, contraseña, callback) => {
    const query = `
        INSERT INTO usuarios(nombre, correo, contraseña, rol)
        VALUES (?, ?, ?, 'usuario')
    `;

    connection.query(query, [nombre, correo, contraseña], (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results);
    });
};
module.exports = {
    buscarUsuarioPorCorreo,
    registrarUsuario
};