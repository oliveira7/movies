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
    this.hasMany(models.List, { foreignKey: "userId", as: "lists" });
  }
}

module.exports = User;
