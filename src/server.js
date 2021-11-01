const App = require("./App");
const config = require("config");

App.app.listen(config.get("api.port"), () => {
  console.log("Api works!");
});

module.exports = App.app;
