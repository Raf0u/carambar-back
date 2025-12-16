const { ValidationError } = require('sequelize');
const Joke = require('../models/joke');
const sequelize = require('../db/sequelize'); // pour la fonction random()

// Récupérer toutes les blagues
exports.findAllJokes = (req, res) => {
    Joke.findAll()
        .then(jokes => {
            res.json(jokes);
        })
        .catch(error => {
            res.status(500).json({ message: "Erreur lors de la récupération des blagues.", error });
        });
};

// Récupérer une blague par son ID

// Récupérer une blague aléatoire

// Créer et ajouter une blague
