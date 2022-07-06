const db = require("../models");
const Comment = db.comments;
const Op = db.Sequelize.Op;

// Create a new comment
exports.create = (req, res) => {
  // Checking that there is content
  if (!req.body.content) {
    res.status(400).send({ message: "The comment can not be empty" });
    return;
  }
  // Create the comment
  const comment = {
    content: req.body.content,
    parent: req.body.parent,
    hasParent: req.body.hasParent,
  };
  // Save to db
  Comment.create(comment)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "The comment was not saved to the database.",
      })
    );
};

// Get all comments
exports.findAll = (req, res) => {
  Comment.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving comments",
      });
    });
};

// Update a comment
exports.update = (req, res) => {
  const id = req.params.id;
  Comment.update(req.body, { where: { id: id } })
    .then((statusNumber) => {
      if (statusNumber == 1) {
        res.status(200).send({ message: "Comment was updated" });
      } else {
        res.send({ message: "The comment was not found." });
      }
    })
    .catch((err) => res.status(500).send(err.message));
};

// Delete comment and children
exports.delete = async (req, res) => {
  try {
    const id = await req.params.id;
    const children = await Comment.findAll({ where: { parent: id } });
    const childId = children.map((el) => el.id);

    await Comment.destroy({
      where: {
        [Op.and]: {
          id: childId,
        },
      },
    });
    await Comment.destroy({ where: { id: id } });
    res.status(200).send({
      ["Deleted comment"]: id,
      ["Deleted children"]: childId,
    });
  } catch (error) {
    throw error;
  }
};
