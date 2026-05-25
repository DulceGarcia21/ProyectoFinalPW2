const connection = require('../config/db');

const getResumenDashboard = (callback) => {
    const query = `
        SELECT
        (SELECT COUNT(*) FROM bicitaxis) AS total_bicitaxis,
        (SELECT COUNT(*) FROM bicitaxis WHERE estado = 'disponible') AS disponibles,
        (SELECT COUNT(*) FROM bicitaxis WHERE estado = 'mantenimiento') AS mantenimiento,
        (SELECT COUNT(*) FROM reportes WHERE estado = 'nuevo') AS reportes_nuevos,
        (SELECT COUNT(*) FROM mantenimientos WHERE estado = 'pendiente') AS mantenimientos_pendientes,
        (SELECT COUNT(*) FROM conductores WHERE estado = 'activo') AS conductores_activos,
        (SELECT COUNT(*) FROM viajes WHERE estado = 'en_viaje') AS viajes_en_curso
    `;

    connection.query(query, (error, results) => {
        if (error) {
            callback(error, null);
            return;
        }

        callback(null, results[0]);
    });
};

module.exports = {
    getResumenDashboard
};