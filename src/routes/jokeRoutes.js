const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

// --- DÉFINITION DES ROUTES ---

// 1. POST : Pour ajouter une blague
// URL finale : http://.../api/v1/blagues
router.post('/', jokeController.createJoke);

// 2. GET : Pour voir toutes les blagues
// URL finale : http://.../api/v1/blagues
router.get('/', jokeController.findAllJokes);

// 3. GET : Pour une blague aléatoire
// URL finale : http://.../api/v1/blagues/random
// ATTENTION : Cette route DOIT être déclarée AVANT la route /:id
router.get('/random', jokeController.findRandomJoke);

// 4. GET : Pour voir une blague spécifique par ID
// URL finale : http://.../api/v1/blagues/1
router.get('/:id', jokeController.findJokeByPk);

module.exports = router;