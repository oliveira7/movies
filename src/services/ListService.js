const { movies, lists } = require("../models");
const Error400 = require("../errors/Error400");
const Error404 = require("../errors/Error404");
class ListService {
  constructor() {}

  async lists() {
    try {
      const list = await lists.findAll();

      if (!list) {
        throw new Error404("Não existe listas criadas.");
      }

      return list;
    } catch (err) {
      throw err;
    }
  }

  async createList(body) {
    try {
      if (!(body.name && body.description)) {
        throw new Error400("Dados inválidos.");
      }

      await lists.create({
        name: body.name,
        description: body.description,
        userId: body.userId,
      });
    } catch (err) {
      throw err;
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
        throw new Error404(`Lista com id: ${listId} não encontrada.`);
      }

      return list;
    } catch (err) {
      throw err;
    }
  }

  async destroyList(listId) {
    try {
      const list = await lists.findByPk(listId);

      if (!list) {
        throw new Error404(`Lista com id: ${listId} não encontrada.`);
      }

      const array = await list.getMovies();
      await list.removeMovies(array);
      await list.destroy();
    } catch (err) {
      throw err;
    }
  }

  async addNewMovie(listId, body) {
    try {
      const list = await lists.findByPk(listId);

      if (!list) {
        throw new Error404(`Lista com id: ${listId} não encontrada.`);
      }

      let movie = await movies.findOne({
        where: { externalId: body.externalId },
      });

      if (!movie) {
        movie = await movies.create(body);
      }

      await list.addMovie(movie);
    } catch (err) {
      throw err;
    }
  }

  async removeMovie(listId, movieId) {
    try {
      const list = await lists.findByPk(listId);

      if (!list) {
        throw new Error404(`Lista com id: ${listId} não encontrada.`);
      }

      const movie = await movies.findByPk(movieId);

      await list.removeMovie(movie);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ListService;
