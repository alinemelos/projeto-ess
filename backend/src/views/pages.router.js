const express = require("express");
const router = express.Router();
const page_controller = require("../controllers/pages")


router.get("/page", page_controller.showpage);

module.exports = router;
