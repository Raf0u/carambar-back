## 🚀 Installation et Lancement

1.  **Installer les dépendances :**
    ```bash
    npm install
    ```

2.  **Lancer le serveur :**
    ```bash
    npm start
    ```
    *Le serveur démarrera sur http://localhost:3000*

A ce point, comment vérifier que ça marche ?
Teste ces liens dans ton navigateur maintenant :

Pour voir toutes les blagues (le JSON) : http://localhost:3000/api/v1/blagues Tu devrais voir le texte brut de tes 10 blagues.
Pour voir une blague aléatoire : http://localhost:3000/api/v1/blagues/random Tu devrais voir une seule blague qui change si tu rafraîchis la page (F5).
Pour voir la coquille de la documentation : http://localhost:3000/api-docs Tu vas voir une belle interface bleue et verte, mais elle sera vide ("No operations defined").

Ces liens seront ensuite complétés au fur et à mesure que tu implémenteras les fonctionnalités.

3.  **Documentation :**
    Accéder à Swagger UI : `http://localhost:3000/api-docs`

## 🛠 Endpoints disponibles

* `GET /api/v1/blagues` : Récupérer toutes les blagues.
* `GET /api/v1/blagues/random` : Récupérer une blague aléatoire.
* `GET /api/v1/blagues/:id` : Récupérer une blague par son ID.
* `POST /api/v1/blagues` : Ajouter une nouvelle blague.