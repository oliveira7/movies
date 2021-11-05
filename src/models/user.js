"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  users.associate = function (models) {
    users.hasMany(models.lists, { foreignKey: "userId" });
  };

  return users;
};
