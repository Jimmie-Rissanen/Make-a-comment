const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

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
  .authenticate()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err.message));
db.sequelize
  .sync({ force: true })
  .then(() => console.log("database synced"))
  .catch((err) => console.log(err.message));

//Routes

app.get("/", (req, res) => {
  res.json({ message: "Japp Japp" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
