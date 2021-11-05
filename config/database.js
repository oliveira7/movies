require("dotenv").config();

module.exports = {
  dialect: 'mysql',
  host: 'db',
  username: process.env.CONTAINER_DB_USER,
  password: process.env.CONTAINER_DB_PASS,
  database: 'movies_db',
  define: {
    timestamps: true,
  },
};
