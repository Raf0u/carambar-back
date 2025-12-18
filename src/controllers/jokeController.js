const { ValidationError } = require('sequelize');
const Joke = require('../models/joke');
const sequelize = require('../db/sequelize'); // pour la fonction random()

// Récupérer toutes les blagues
exports.findAllJokes = (req, res) => {
    // .findAll() est une méthode de requête Sequelize qui génère et exécute
    // la requête SQL suivante : SELECT * FROM Jokes;
    Joke.findAll() // fonction asynchrone, qui renvoie une Promise
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
exports.findJokeByPk = (req, res) => {
    Joke.findByPk(req.params.id)
        .then(joke => {
            if (!joke) {
                return res.status(404).json({ message: "La blague demandée n'existe pas." });
            }
            res.json(joke);
        })
        .catch(error => {
            res.status(500).json({ message: "Erreur serveur.", error });
        });
};

// Récupérer une blague aléatoire
exports.findRandomJoke = (req, res) => {
    Joke.findOne({ order: sequelize.random() })
        .then(joke => {
            if (!joke) {
                return res.status(404).json({ message: "Aucune blague disponible dans la BDD." });
            }
            res.json(joke);
        })
        .catch(error => {
            res.status(500).json({ message: "Erreur serveur.", error });
        });
};

// Créer et ajouter une blague
exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(joke => {
          const message = `La blague '${joke.question}' a bien été créée.`;
          res.status(201).json({ message, data: joke });
        })
        .catch(error => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error});
            }
            res.status(500).json({ message: "Erreur serveur.", error });
        });
        //.catch(error => {
        //    if (error instanceof ValidationError) {
        //       res.status(400).json({ message: error.message, data: error});
        //    } else {
        //          res.status(500).json({ message: "Erreur serveur.", error });
        //}
};
