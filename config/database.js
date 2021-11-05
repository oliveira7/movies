require("dotenv").config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST  || 'db',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'movies_db',
  define: {
    timestamps: true,
  },
};
