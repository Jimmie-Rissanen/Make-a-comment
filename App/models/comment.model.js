// Create the schema for db

module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    parent: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });
  return Comment;
};
