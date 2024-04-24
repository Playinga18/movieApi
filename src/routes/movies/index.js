const expressRouter = require('express').Router(),
    moviesController = require('../../controllers/movies');

module.exports = (app) => {
    app.get('/movies', moviesController.getAll)
    expressRouter.get('/movies', moviesController.getAll)
    app.use('/api/v1', expressRouter)
}


