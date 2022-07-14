const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const controllers = require("./controllers/comment.controller");

const PORT = process.env.PORT || 5000;
const app = express();

//Middleware

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database
const db = require("./models");
db.sequelize
  .sync()
  .then(() => console.log("database synced"))
  .catch((err) => console.log(err.message));

//Routes

app.post("/create", controllers.create);
app.get("/", controllers.findAll);
app.put("/update/:id", controllers.update);
app.delete("/delete/:id", controllers.delete);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
