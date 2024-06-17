const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const post_controller = require("../controllers/posts");
const put_controller = require("../controllers/edition_reviews");

router.get("/", controller.get);

// Miguel
router.post("/posts", post_controller.createPost);
router.delete("/posts", post_controller.deletePost);

//Aline
router.put("/review", put_controller.putEditR);
router.delete("/review", put_controller.deleteR);

module.exports = router;
