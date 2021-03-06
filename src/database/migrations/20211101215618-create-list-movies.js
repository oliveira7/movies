"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("list_movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      listId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "lists", key: "id" },
      },
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "movies", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("list_movies");
  },
};
