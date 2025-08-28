const express = require("express");
const {
  createNote,
  getNote,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

router.route("/").post(createNote).get(getNotes);
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

module.exports = router;
