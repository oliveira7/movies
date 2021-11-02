const { Movies, Lists } = require("../models");

class ListService {
  constructor() {}

  async lists() {
    try {
      const lists = await Lists.findAll();

      if (!lists) {
        throw new Error("Não existe nenhuma lista!");
      }

      return lists;
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

      await Lists.create({
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
      const list = await Lists.findByPk(listId, {
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
      await Lists.destroy({
        where: { id: listId },
      });
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }

  async addNewMovie(listId, body) {
    try {
      const list = await Lists.findByPk(listId);

      if (!list) {
        throw new Error("Lista não encontrada!");
      }

      let movie = await Movies.findOne({
        where: { externalId: body.externalId },
      });

      if (!movie) {
        movie = await Movies.create(body);
      }

      await list.addMovie(movie);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }

  async removeMovie(listId, movieId) {
    try {
      const list = await Lists.findByPk(listId);

      if (!list) {
        throw new Error("Lista não encontrada!");
      }

      const movie = await Movies.findByPk(movieId);

      await list.removeMovie(movie);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }
}

module.exports = ListService;
