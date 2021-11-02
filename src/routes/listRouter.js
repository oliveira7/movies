const router = require("express").Router();
const listController = require("../controllers/listController");

router.get("/lists", listController.index);
router.post("/lists", listController.store);
router.get("/lists/:id", listController.show);
router.delete("/lists/:id", listController.destroy);

router.post("/lists/:id/movies", listController.addMovie);
router.delete("/lists/:id/movies/:movieId", listController.removeMovie);

module.exports = router;
