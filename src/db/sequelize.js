const { Sequelize } = require('sequelize');

// On instancie Sequelize pour utiliser SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false, // Désactive les logs SQL pour plus de clarté
});

module.exports = sequelize;