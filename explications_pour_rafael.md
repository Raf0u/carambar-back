`src/routes/jokeRoute.js`

Si tu mets /:id en premier, Express est "bête". Quand tu appelleras /blagues/random, Express va penser que le mot "random" est un ID (comme si c'était l'ID n°random). Il va essayer de chercher une blague avec l'ID "random" dans la base de données, ce qui va créer un bug.

En mettant /random d'abord, on dit : "Vérifie d'abord si l'utilisateur veut du random. Si ce n'est pas le cas, alors considère que ce qui suit est un ID."