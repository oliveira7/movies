"use strict";
module.exports = (sequelize, DataTypes) => {
  const lists = sequelize.define(
    "lists",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  lists.associate = function (models) {
    lists.belongsTo(models.users, { foreignKey: "userId" });
    lists.belongsToMany(models.movies, {
      foreignKey: "listId",
      through: "list_movies",
      as: "movies",
    });
  };

  return lists;
};
