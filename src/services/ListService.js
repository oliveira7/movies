const { movies, lists } = require("../models");

class ListService {
  constructor() {}

  async lists() {
    try {
      const list = await lists.findAll();

      if (!list) {
        throw new Error("Não existe nenhuma lista!");
      }

      return list;
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }

  async createList(body) {
    try {
      if (!(body.name && body.description)) {
        throw new Error("Dados inválidos!");
      }

      await lists.create({
        name: body.name,
        description: body.description,
        userId: body.userId,
      });
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }

  async showList(listId) {
    try {
      const list = await lists.findByPk(listId, {
        include: {
          association: "movies",
          through: {
            attributes: [],
          },
        },
      });

      if (!list) {
        throw new Error("Lista não encontrada!");
      }

      return list;
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }

  async destroyList(listId) {
    try {
      const list = await lists.findByPk(listId);
      const array = await list.getMovies();
      await list.removeMovies(array);
      await list.destroy();
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }

  async addNewMovie(listId, body) {
    try {
      const list = await lists.findByPk(listId);

      if (!list) {
        throw new Error("Lista não encontrada!");
      }

      let movie = await movies.findOne({
        where: { externalId: body.externalId },
      });

      if (!movie) {
        movie = await movies.create(body);
      }

      await list.addMovie(movie);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }

  async removeMovie(listId, movieId) {
    try {
      const list = await lists.findByPk(listId);

      if (!list) {
        throw new Error("Lista não encontrada!");
      }

      const movie = await movies.findByPk(movieId);

      await list.removeMovie(movie);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }
}

module.exports = ListService;
