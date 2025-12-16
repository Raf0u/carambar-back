const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

// Définition du modèle Joke
const Joke = sequelize.define('Joke', {

    question: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "La question ne peut pas être vide." },
            len: {
                args: [10, 255],
                msg: "La question doit contenir entre 10 et 255 caractères."
            },
            is: {
                args: [/\?$/],
                msg: "La question doit se terminer par un point d'interrogation."
            },
        }
    },

    answer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: "La réponse ne peut pas être vide." },
            len: {
                args: [2, 255],
                msg: "La réponse doit contenir entre 2 et 255 caractères."
            }
        }
    },

    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Joke;



    },