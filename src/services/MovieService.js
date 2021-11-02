const axios = require("axios");
const { Movie } = require("../models");

class MovieService {
  constructor() {}

  async search(search) {
    try {
      const response = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/search/movie",
        headers: {
          Authorization: process.env.AUTH_TMDB,
          "Content-Type": "application/json;charset=utf-8",
        },
        params: {
          language: "pt-br",
          query: search,
        },
      });

      return response.data;
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }

  async detail(movieId) {
    try {
      const movie = await Movie.findByPk(movieId);

      if (!movie) {
        throw new Error("Filme não encontrado!");
      }

      return movie;
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }
}

module.exports = MovieService;
