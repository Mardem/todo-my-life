const connection = require('../config/db-config.js');
const {DataTypes} = require('sequelize');

const Todo = connection.define('todos', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

Todo.sync({ force: false }).then(() => {
    console.log('Tabela todo criada com sucesso');
}).catch(err => {
    console.log('erro ao criar uma tabela');
    console.error(err);
});

module.exports = Todo;