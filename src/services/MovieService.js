const axios = require("axios");
const Movie = require("../models/Movie");

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
      throw new Error({ message: err.message });
    }
  }

  async detail(movieId) {
    try {
      const movie = await Movie.findByPk(movieId);

      if (!movie) {
        throw new Error({ error: "Filme não encontrado!" });
      }

      return movie;
    } catch (err) {
      throw new Error({ message: err.message });
    }
  }
}

module.exports = MovieService;
