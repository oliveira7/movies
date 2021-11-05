const ListService = require("../services/ListService");
const ListServiceInstance = new ListService();

module.exports = {
  async index(req, res, next) {
    try {
      const lists = await ListServiceInstance.lists();

      res.status(200).send(lists);
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
  async store(req, res, next) {
    try {
      const { body } = req;
      await ListServiceInstance.createList(body);

      res.status(201).end();
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
  async show(req, res, next) {
    try {
      const { id } = req.params;
      const list = await ListServiceInstance.showList(id);

      res.status(200).send(list);
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      await ListServiceInstance.destroyList(id);

      res.status(204).end();
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
  async addMovie(req, res, next) {
    try {
      const { id } = req.params;
      const { body } = req;
      await ListServiceInstance.addNewMovie(id, body);

      res.status(201).end();
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
  async removeMovie(req, res, next) {
    try {
      const { id, movieId } = req.params;
      await ListServiceInstance.removeMovie(id, movieId);

      res.status(204).end();
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
};
