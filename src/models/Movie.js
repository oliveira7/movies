("use strict");
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define(
    "Movies",
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
  Movies.associate = function (models) {
    Movies.belongsTo(models.Users);
    Movies.belongsToMany(models.Lists, {
      foreignKey: "movieId",
      through: "list_movies",
      as: "lists",
    });
  };

  return Movies;
};
