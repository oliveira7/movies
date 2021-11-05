const axios = require("axios");
const { movies } = require("../models");
const Error404 = require("../errors/Error404");
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
      throw err;
    }
  }

  async detail(movieId) {
    try {
      const movie = await movies.findByPk(movieId);

      if (!movie) {
        throw new Error404(`Filme com id: ${movieId} não encontrado.`);
      }

      return movie;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = MovieService;
