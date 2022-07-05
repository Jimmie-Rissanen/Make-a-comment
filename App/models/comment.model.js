// Create the schema for db

module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comment", {
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    parent: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    hasParent: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  });
  return Comment;
};
