const express = require("express");
const router = express.Router();
const platform_controller = require("../controllers/platform");

// Eduarda
router.post("/", platform_controller.createPlatform);
router.delete("/", platform_controller.deletePlatform);

module.exports = router;