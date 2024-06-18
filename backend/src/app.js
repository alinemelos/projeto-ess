const express = require("express");
const app = express();
const router = require("./views/exemplo.routes");
const postRouter = require("./views/posts.routes");
const commentRouter = require("./views/comment.routes");
const pagesRouter = require("./views/pages.router");

app.use(express.json()); // Add this line to parse JSON request bodies

app.use("/", router);

// Miguel
app.use("/posts", postRouter);

// italo
app.use("/comment", commentRouter);

//João Pedro
app.use("/pages", pagesRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
