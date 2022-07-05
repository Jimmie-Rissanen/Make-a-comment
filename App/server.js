const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const controllers = require("./controllers/comment.controller");

const PORT = process.env.PORT || 5000;
const app = express();
const corsOptions = {
  origin: "http://localhost:6000",
};

//Middleware

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database
const db = require("./models");
db.sequelize
  .sync()
  .then(() => console.log("database synced"))
  .catch((err) => console.log(err.message));

//Routes

app.post("/", controllers.create);
app.get("/", controllers.findAll);
app.put("/:id", controllers.update);
app.delete("/:id", controllers.delete);
app.delete("/parent:id/", controllers.deleteAll);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
