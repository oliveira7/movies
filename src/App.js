const express = require("express");
const cors = require("cors");
const handlebars = require("express-handlebars");

const path = require("path");
require("dotenv").config();

const applicationRouter = require("./routes/applicationRouter");
const movieRouter = require("./routes/movieRouter");
const userRouter = require("./routes/userRouter");
const listRouter = require("./routes/listRouter");

class App {
  app = express.application;

  constructor() {
    this.app = express();
    this.handlebars();
    this.unProtectedRoutes();
    this.middleware();
    this.protectedRoutes();
  }

  handlebars() {
    this.app.set("views", path.join(__dirname, "views"));
    this.app.engine("handlebars", handlebars({ defaultLayout: "main" }));
    this.app.set("view engine", "handlebars");
  }

  enableCors() {
    const options = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    };

    this.app.use(cors(options));
  }

  middleware() {
    this.enableCors();
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  unProtectedRoutes() {}

  protectedRoutes() {
    this.app.use("/", applicationRouter);
    this.app.use("/", movieRouter);
    this.app.use("/", userRouter);
    this.app.use("/", listRouter);
  }
}

module.exports = new App();