"use strict";
module.exports = (sequelize, DataTypes) => {
  const Lists = sequelize.define(
    "Lists",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Lists.associate = function (models) {
    Lists.belongsTo(models.Users);
    Lists.belongsToMany(models.Movies, {
      foreignKey: "listId",
      through: "list_movies",
      as: "movies",
    });
  };

  return Lists;
};