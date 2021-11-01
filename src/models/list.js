const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    this.belongsToMany(models.Movie, {
      foreignKey: "listId",
      through: "list_movies",
      as: "movies",
    });
  }
}

module.exports = User;
