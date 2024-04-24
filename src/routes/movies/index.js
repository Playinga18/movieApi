const expressRouter = require('express').Router(),
    moviesController = require('../../controllers/movies'),
    JWTGuard = require('../../config/passport');

module.exports = (app) => {
    app.get('/movies', JWTGuard.checkIsAuth, moviesController.getAll)
    expressRouter.get('/movies',JWTGuard.checkIsAuth, moviesController.getAll)
    app.use('/api/v1', expressRouter)

    // Créer un nouveau film
    app.post('/movies', JWTGuard.checkIsAuth, moviesController.create);

    // Récupérer un film par ID
    app.get('/movies/:id', JWTGuard.checkIsAuth, moviesController.getById);

    // Mettre à jour un film par ID
    app.put('/movies/:id', JWTGuard.checkIsAuth, moviesController.update);

    // Supprimer un film par ID
    app.delete('/movies/:id', JWTGuard.checkIsAuth, moviesController.delete);
}


