const express = require("express");
const cors = require("cors");
const controllers = require("./Controllers");
const app = express();

app.set("port", process.env.PORT || 8000);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Heroku Server is running");
});

// app.use("/Authorize", controllers.authorize);
// app.use("/Upload", controllers.books);
// app.use("/User", controllers.user);

app.listen(app.get("port"), () => {
  console.log(`app listening on port ${app.get("port")}`);
});