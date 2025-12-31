const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       required:
 *         - question
 *         - answer
 *       properties:
 *         id:
 *           type: integer
 *           description: L'ID auto-généré de la blague
 *         question:
 *           type: string
 *           description: Le début de la blague
 *         answer:
 *           type: string
 *           description: La chute de la blague
 *       example:
 *         id: 1
 *         question: "Quelle est la femelle du hamster ?"
 *         answer: "L’Amsterdam"
 */

/**
 * @swagger
 * tags:
 *   name: Blagues
 *   description: L'API pour gérer les blagues Carambar
 */

/**
 * @swagger
 * /api/v1/blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Joke'
 *     responses:
 *       201:
 *         description: La blague a été créée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       500:
 *         description: Erreur serveur
 */
router.post('/', jokeController.createJoke);

/**
 * @swagger
 * /api/v1/blagues:
 *   get:
 *     summary: Récupérer la liste de toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: La liste des blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Joke'
 */
router.get('/', jokeController.findAllJokes);

/**
 * @swagger
 * /api/v1/blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague au hasard
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Aucune blague trouvée
 */
router.get('/random', jokeController.findRandomJoke);

/**
 * @swagger
 * /api/v1/blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par son ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: La blague demandée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Joke'
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', jokeController.findJokeByPk);

module.exports = router;
