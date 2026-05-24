const bicitaxiModel = require('../models/bicitaxiModel');

const mostrarBicitaxis = (req, res) => {

    bicitaxiModel.getAllBicitaxis((error, results) => {

        if (error) {
            console.log(error);
            return;
        }

        res.render('bicitaxis', {
            bicitaxis: results
        });

    });

};

module.exports = {
    mostrarBicitaxis
};