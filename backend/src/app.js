const express = require("express");
const app = express();
const router = require("./views/router");

app.use(express.json()); // Add this line to parse JSON request bodies

app.use("/", router);
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
