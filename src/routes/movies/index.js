const expressRouter = require('express').Router(),
    moviesController = require('../../controllers/movies');

module.exports = (app) => {
    app.get('/movies', moviesController.getAll)
    expressRouter.get('/movies', moviesController.getAll)
    app.use('/api/v1', expressRouter)

    // Créer un nouveau film
    app.post('/movies', moviesController.create);

    // Récupérer un film par ID
    app.get('/movies/:id', moviesController.getById);

    // Mettre à jour un film par ID
    app.put('/movies/:id', moviesController.update);

    // Supprimer un film par ID
    app.delete('/movies/:id', moviesController.delete);
}


