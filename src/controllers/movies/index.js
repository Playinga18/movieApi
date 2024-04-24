const Movie = require('../../models/movies'); // Importez votre modèle Movies
const mongoose = require('mongoose');

/**
 * @description Récupérer tous les films
 * @param req
 * @param res
 * @return {*}
 */
exports.getAll = async (req, res) => {
    try {
        const movies = await Movie.find().exec();
        return !movies
            ? res.status(400).json({ statusCode: 400, message: 'ERROR IN RETRIEVE ALL MOVIES' })
            : res.status(200).json({ statusCode: 200, message: movies });
    } catch (e) {
        return res.status(400).json({ statusCode: 400, message: e.message });
    }
};

/**
 * @description Créer un nouveau film
 * @param req
 * @param res
 * @return {*}
 */
exports.create = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        return !movie
            ? res.status(400).json({ statusCode: 400, message: 'ERROR IN CREATE NEW MOVIE' })
            : res.status(201).json({ statusCode: 201, message: movie });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ statusCode: 400, message: e.message });
    }
};

/**
 * @description Récupérer un film par ID
 * @param req
 * @param res
 * @return {*}
 */
exports.getById = async (req, res) => {
    try {
        const { id } = req.params;
        id = new mongoose.Types.ObjectId(id);
        const movie = await Movie.findById(id).exec();
        return !movie
            ? res.status(400).json({ statusCode: 400, message: 'ERROR in getby id' })
            : res.status(200).json({ statusCode: 200, message: movie });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ statusCode: 400, message: e.message });
    }
};

/**
 * @description Mettre à jour un film
 * @param req
 * @param res
 * @return {*}
 */
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true }).exec();
        return !movie
            ? res.status(400).json({ statusCode: 400, message: 'ERROR IN UPDATE MOVIE' })
            : res.status(200).json({ statusCode: 200, message: movie });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ statusCode: 400, message: e.message });
    }
};

/**
 * @description Supprimer un film
 * @param req
 * @param res
 * @return {*}
 */
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findByIdAndDelete(id).exec();
        return !movie
            ? res.status(400).json({ statusCode: 400, message: 'ERROR IN DELETE MOVIE' })
            : res.status(200).json({ statusCode: 200, message: movie });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ statusCode: 400, message: e.message });
    }
};
