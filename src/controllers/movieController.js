const MovieService = require("../services/MovieService");
const MovieServiceInstance = new MovieService();

module.exports = {
  async search(req, res, next) {
    try {
      const { search } = req.query;
      const response = await MovieServiceInstance.search(search);

      res.status(200).send(response);
    } catch (err) {
      console.log({ message: err.message });
    }
  },
  async show(req, res, next) {
    try {
      const { id } = req.params;
      const response = await MovieServiceInstance.detail(id);

      res.status(200).send(response);
    } catch (err) {
      console.log({ message: err.message });
    }
  },
};
