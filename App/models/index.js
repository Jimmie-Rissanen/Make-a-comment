// Initializeing sequelize and configuring DB

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.comments = require("./comment.model.js")(sequelize, Sequelize);
module.exports = db;
