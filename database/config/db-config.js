const { Sequelize } = require('sequelize');

module.exports = new Sequelize('myLife', 'root', 'marden', {
    host: '0.0.0.0',
    dialect: 'mysql'
});