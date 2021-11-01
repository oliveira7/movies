const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        externalId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        originalTitle: DataTypes.STRING,
        posterPath: DataTypes.STRING,
        releaseDate: DataTypes.DATE,
        overview: DataTypes.STRING,
        voteAverage: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.List, {
      foreignKey: "movieId",
      through: "list_movies",
      as: "lists",
    });
  }
}

module.exports = Movie;
