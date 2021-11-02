const axios = require("axios");
const List = require("../models/List");

class ListService {
  constructor() {}

  async lists() {
    try {
      const lists = await List.findAll();

      if (!lists) {
        throw new Error({ error: "Não existe nenhuma lista!" });
      }

      return lists;
    } catch (err) {
      throw new Error({ message: err.message });
    }
  }

  async createList(body) {
    try {
      await List.create(body);
    } catch (err) {
      throw new Error({ message: err.message });
    }
  }

  async showList(listId) {
    try {
      const list = await List.findByPk(listId);

      if (!list) {
        throw new Error({ error: "Lista não encontrada!" });
      }

      return list;
    } catch (err) {
      throw new Error({ message: err.message });
    }
  }

  async destroyList(listId) {
    try {
      const tech = await List.findOne({
        where: { name },
      });

      await List.removeByFK(listId);
    } catch (err) {
      throw new Error({ message: err.message });
    }
  }

  async addNewMovie(listId, title) {
    try {
      const list = await List.findByPk(listId);

      if (!list) {
        throw new Error({ error: "Lista não encontrada!" });
      }

      const [movie] = await Movie.findOrCreate({
        where: { title },
      });

      await list.addMovie(movie);
    } catch (err) {
      throw new Error({ message: err.message });
    }
  }

  async removeMovie(listId, movieId) {
    try {
      const list = await List.findByPk(listId);

      if (!list) {
        throw new Error({ error: "Lista não encontrada!" });
      }

      const movie = await Movie.findOne({
        where: { movieId },
      });

      await list.removeMovie(movie);
    } catch (err) {
      throw new Error({ message: err.message });
    }
  }
}

module.exports = ListService;
