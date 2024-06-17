const express = require("express");
const router = express.Router();
const movies_controller = require("../controllers/movies");

// Miguel
router.post("/", movies_controller.addMovie);

module.exports = router;

//