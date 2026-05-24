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

module.exports = {
    getAllBicitaxis
};