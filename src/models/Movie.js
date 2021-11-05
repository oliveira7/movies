("use strict");
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define(
    "movies",
    {
      externalId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      originalTitle: DataTypes.STRING,
      posterPath: DataTypes.STRING,
      releaseDate: DataTypes.DATE,
      overview: DataTypes.STRING,
      voteAverage: DataTypes.INTEGER,
    },
    {}
  );
  movies.associate = function (models) {
    movies.belongsToMany(models.lists, {
      foreignKey: "movieId",
      through: "list_movies",
      as: "lists"
    });
  };

  return movies;
};
