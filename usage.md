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

3.  **Documentation :**
    Accéder à Swagger UI : `http://localhost:3000/api-docs`

## 🛠 Endpoints disponibles

* `GET /api/v1/blagues` : Récupérer toutes les blagues.
* `GET /api/v1/blagues/random` : Récupérer une blague aléatoire.
* `GET /api/v1/blagues/:id` : Récupérer une blague par son ID.
* `POST /api/v1/blagues` : Ajouter une nouvelle blague.