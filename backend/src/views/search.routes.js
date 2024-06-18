const express = require("express");
const router = express.Router();
const search_controller = require("../controllers/search");

// Vidal
router.get("/", search_controller.search);

module.exports = router;
