const express = require("express");
const router = express.Router();

const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNote,
} = require("../controllers/tasks");

router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").get(getNote).delete(deleteNote).patch(updateNote);

module.exports = router;
