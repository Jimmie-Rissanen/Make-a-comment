const db = require("../modles");
const Comment = db.Comment;
const Op = db.Sequelize.Op;

// Create a new comment
exports.create = (req, (res) => {});

// Get all comments
exports.findAll = (req, (res) => {});

// Update a comment
exports.update = (req, (res) => {});

// Delete one commet by id
exports.destroy = (req, (res) => {});

// Delete all comments where parent = deleted parent
exports.destroy = (req, (res) => {});
