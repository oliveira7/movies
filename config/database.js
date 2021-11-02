require("dotenv").config();

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
  },
};
