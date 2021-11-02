const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/movies/search", movieController.search); 
router.get("/movies/:id", movieController.show); 

module.exports = router;
