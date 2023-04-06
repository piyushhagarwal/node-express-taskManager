const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  creatNote,
  updateNote,
  deleteNote,
  getNote,
} = require("../controllers/tasks");

router.route("/").get(getAllNotes).post(creatNote);
router.route("/:id").get(getNote).post(deleteNote).post(updateNote);

module.exports = router;
