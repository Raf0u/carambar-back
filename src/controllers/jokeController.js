const { ValidationError } = require('sequelize');
const Joke = require('../models/joke');
const sequelize = require('../db/sequelize'); // pour la fonction random()

// Récupérer toutes les blagues
exports.findAllJokes = (req, res) => {
    Joke.findAll()
        // .then(...) pour gérer le résultat si l'opération a réussi
        .then(jokes => {
            // convertit le tableau d'objets jokes en une chaîne JSON et l'envoie au client
            res.json(jokes);
        })
        // .catch(...) pour gérer l'échec de la Promise
        .catch(error => {
            // envoie une réponse JSON au client, incluant l'objet error lui-même (pour faciliter le débogage)
            res.status(500).json({ message: "Erreur lors de la récupération des blagues.", error });
        });
};

// Récupérer une blague par son ID

// Récupérer une blague aléatoire

// Créer et ajouter une blague
