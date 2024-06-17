const express = require("express");
const router = express.Router();
const movies_controller = require("../controllers/movies");

// Miguel
router.post("/", movies_controller.addMovie);
router.delete("/", movies_controller.delMovie);

module.exports = router;

//