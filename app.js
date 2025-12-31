const express = require('express');
const cors = require('cors'); // Pour autoriser le Front-end (GitHub Pages) à nous parler
const sequelize = require('./src/db/sequelize'); // Notre connexion BDD
const jokeRoutes = require('./src/routes/jokeRoutes'); // Nos routes
const Joke = require('./src/models/joke'); // Notre modèle pour le remplissage auto
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000; // Port 3000 par défaut

// --- MIDDLEWARES ---
// Ce sont les "douaniers" qui traitent la requête avant qu'elle n'arrive aux routes.

// 1. CORS : Indispensable pour que le Front (sur un autre domaine) puisse appeler le Back.
app.use(cors());

// 2. Parser JSON : Permet de lire le body des requêtes POST (transforme le texte brut en objet JS).
app.use(express.json());

// --- CONFIGURATION SWAGGER ---
// C'est ici qu'on définit les métadonnées de la documentation API.
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Carambar & Co API',
            version: '1.0.0',
            description: 'API de blagues pour le test technique CDA',
            contact: {
                name: 'Développeur CDA'
            }
        },
        servers: [
            { url: `http://localhost:${PORT}` },
            { url: 'https://ton-app-sur-render.com' } // À mettre à jour après déploiement
        ],
    },
    // Indique où Swagger doit chercher les annotations (dans nos routes)
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
// Route pour afficher la documentation visuelle
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// --- ROUTES ---
// On préfixe toutes nos routes par /api/v1 pour le versioning demandé.
app.use('/api/v1/blagues', jokeRoutes);

// --- DONNÉES DE DÉMARRAGE (SEED) ---
// Liste des blagues fournies dans le cahier des charges
const initialJokes = [
    { question: "Quelle est la femelle du hamster ?", answer: "L’Amsterdam" },
    { question: "Que dit un oignon quand il se cogne ?", answer: "Aïe" },
    { question: "Quel est l'animal le plus heureux ?", answer: "Le hibou, parce que sa femme est chouette." },
    { question: "Pourquoi le football c'est rigolo ?", answer: "Parce que Thierry en rit" },
    { question: "Quel est le sport le plus fruité ?", answer: "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes." },
    { question: "Que se fait un Schtroumpf quand il tombe ?", answer: "Un Bleu" },
    { question: "Quel est le comble pour un marin ?", answer: "Avoir le nez qui coule" },
    { question: "Qu'est ce que les enfants usent le plus à l'école ?", answer: "Le professeur" },
    { question: "Quel est le sport le plus silencieux ?", answer: "Le para-chuuuut" },
    { question: "Quel est le comble pour un joueur de bowling ?", answer: "C’est de perdre la boule" }
];

// --- DÉMARRAGE DU SERVEUR ---
// On synchronise la base de données, puis on lance le serveur.
sequelize.sync()
    .then(async () => {
        console.log('Connexion à la base de données SQLite réussie.');

        // LOGIQUE DE SEEDING :
        // On compte les blagues. Si la table est vide (0), on injecte les blagues initiales.
        const count = await Joke.count();
        if (count === 0) {
            console.log('Base de données vide. Injection des blagues initiales...');
            await Joke.bulkCreate(initialJokes);
            console.log('10 blagues ajoutées avec succès !');
        }

        app.listen(PORT, () => {
            console.log(`Serveur démarré sur http://localhost:${PORT}`);
            console.log(`Documentation Swagger disponible sur http://localhost:${PORT}/api-docs`);
        });
    })
    .catch(error => {
        console.error('Impossible de se connecter à la base de données :', error);
    });