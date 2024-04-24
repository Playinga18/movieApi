// src/models/movies/index.js
const mongoose = require('mongoose');

// modele de la table movie dans ma table
const movieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: Date,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  countries: [String],
  type: String,
  tomatoes: {
    viewer: {
      fresh: Number,
    },
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number,
      rotten: Number,
      lastUpdated: Date,
    },
  },
});

module.exports = mongoose.model('Movie', movieSchema);
