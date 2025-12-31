# carambar-back

NEXT STEP:

- [ ] Créer les routes API
  - [ ] Créer le fichier src/routes/jokeRoutes.js
  - [ ] Définir les méthodes HTTP : Associer les verbes (GET, POST) et les URLs aux fonctions du contrôleur (ex: router.get('/random', jokeCtrl.findRandomJoke))
- [ ] Le Cerveau (Point d'entrée app.js)
  - [ ] Initialiser Express : Créer l'application
  - [ ] Configurer les Middlewares: body-parser (pour lire le JSON entrant) // cors (pour autoriser le futur Front-end GitHub Pages à discuter avec le Back)
  - [ ] Synchroniser la BDD : Dire à Sequelize de créer la table Jokes si elle n'existe pas au démarrage
- [ ] La Documentation (Swagger)
  - [ ] Configurer Swagger : Dans app.js (ou un fichier dédié), définir les options de base (Titre de l'API, version)
  - [ ] Annoter les Routes : Ajouter des commentaires spéciaux (JSDoc) au-dessus des routes pour qu'elles apparaissent dans la page de documentation automatique
- [ ] L'Automatisation des Données (Seed)
  - [ ] Créer une liste JSON : Mettre les 10 blagues dans une constante
  - [ ] Script d'initialisation : Ajouter une petite fonction dans app.js qui dit : "Si la table est vide, ajoute ces 10 blagues automatiquement"
- [ ] La Configuration de Lancement (package.json)
  - [ ] Modifier package.json : Ajouter le script "start": "node app.js"
- [ ] Validation Finale (Le Test)
  - [ ] Lancer le serveur : npm start
  - [ ] Test Postman : Vérifier les 4 endpoints (Ajout, Tout voir, Voir ID, Random)
  - [ ] Test Swagger : Ouvrir http://localhost:3000/api-docs et vérifier que la doc est belle