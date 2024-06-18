const express = require("express");
const router = express.Router();
const comment_controller = require("../controllers/comment");

// italo
router.post("/", comment_controller.createComment);
router.delete("/", comment_controller.deleteComment);
router.put("/", comment_controller.putComment);

module.exports = router;
