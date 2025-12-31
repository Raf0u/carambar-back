## 📚 Concepts Clés

### 1. Architecture MVC (Modèle - Vue - Contrôleur)
Bien que ce soit une API (donc pas de "Vue" HTML générée par le serveur), nous respectons la séparation des responsabilités :
* **Modèle (`/models`)** : La structure des données (Table `Jokes`). C'est le seul endroit qui parle à la BDD.
* **Contrôleur (`/controllers`)** : La logique métier. C'est le chef d'orchestre qui reçoit la demande, interroge le modèle et renvoie la réponse.
* **Routes (`/routes`)** : Les aiguilleurs du ciel. Elles associent une URL (ex: `/random`) à une fonction du contrôleur.

### 2. L'ORM Sequelize
Plutôt que d'écrire du SQL brut (`SELECT * FROM...`), nous utilisons un ORM (Object-Relational Mapping).
* Cela permet de manipuler la base de données avec des objets JavaScript (`Joke.findAll()`).
* Avantage : Sécurité (protection contre les injections SQL) et portabilité.

### 3. Le Piège de l'Ordre des Routes
Dans le fichier `jokeRoutes.js`, l'ordre est critique :
1.  `GET /random`
2.  `GET /:id`

**Pourquoi ?** Si on inverse, Express penserait que le mot "random" est un ID (comme l'ID n°random). Il faut toujours définir les routes statiques spécifiques avant les routes dynamiques (`:id`).

### 4. CORS (Cross-Origin Resource Sharing)
Dans `app.js`, nous utilisons `app.use(cors())`.
Sans cela, le navigateur bloquerait les requêtes venant du Front-end (GitHub Pages) par sécurité, car il n'est pas sur le même domaine que l'API (Render).

### 5. Seeding (Remplissage automatique)
Sur des hébergeurs gratuits comme Render, le système de fichiers est éphémère (reset à chaque redémarrage).
* **Solution :** Au démarrage (`app.js`), on vérifie si la table est vide. Si oui, on injecte les 10 blagues initiales automatiquement. 
* Cela garantit que l'API est toujours utilisable.

## 6. Documentation avec Swagger
Swagger permet de générer automatiquement une documentation interactive pour l'API.
* Les annotations JSDoc dans `jokeRoutes.js` décrivent chaque endpoint (paramètres, réponses).
* La page Swagger UI (`/api-docs`) permet de tester les endpoints directement depuis le navigateur.

components/schemas/Joke :
Au début du fichier, on définit une seule fois à quoi ressemble une "Blague". 
Ensuite, on utilise $ref: '#/components/schemas/Joke' partout ailleurs. 
C'est comme une variable : si la structure de la blague change, on la modifie à un seul endroit.

Les Tags :
tags: [Blagues] permet de regrouper toutes ces routes dans une belle section nommée "Blagues" sur l'interface graphique.