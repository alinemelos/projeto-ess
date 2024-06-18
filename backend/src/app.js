const express = require("express");
const app = express();
const router = require("./views/exemplo.routes");
const postRouter = require("./views/posts.routes");
const maintenanceRouter = require("./views/maintenance.routes");

app.use(express.json()); // Add this line to parse JSON request bodies

app.use("/", router);

// Miguel
app.use("/posts", postRouter);

//Aline
app.use("/maintenance", maintenanceRouter);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});