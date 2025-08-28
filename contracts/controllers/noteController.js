const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");
const uuid = require("uuid").v4;

/*
Note structure
{
  id: String,
  title: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
}

*/

const db = []; // in-memory db, indicated on requirements.

/**
 * Create a new note
 */
exports.createNote = asyncErrorHandler(async (req, res, next) => {
  const { title, content } = req.body;
  const newNote = {
    id: uuid(),
    title,
    content,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  db.push(newNote);
  res.status(201).json({
    success: true,
    note: newNote,
  });
});

/**
 * Get a note by id
 */
exports.getNote = asyncErrorHandler(async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({
      success: false,
      message: "Note id is required",
    });
  }

  const note = db.find((n) => n.id === req.params.id);
  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }
  res.status(200).json({
    success: true,
    note,
  });
});

/**
 * Get all notes
 */
exports.getNotes = asyncErrorHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    notes: db,
  });
});

/**
 * Update a note by id
 */
exports.updateNote = asyncErrorHandler(async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({
      success: false,
      message: "Note id is required",
    });
  }

  const noteIndex = db.findIndex((n) => n.id === req.params.id);
  if (noteIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  const { title, content } = req.body;
  if (title) db[noteIndex].title = title;
  if (content) db[noteIndex].content = content;
  db[noteIndex].updatedAt = new Date();

  res.status(200).json({
    success: true,
    note: db[noteIndex],
  });
});

/**
 * Delete a note by id
 */
exports.deleteNote = asyncErrorHandler(async (req, res, next) => {
  if (!req.params.id) {
    return res.status(400).json({
      success: false,
      message: "Note id is required",
    });
  }

  const noteIndex = db.findIndex((n) => n.id === req.params.id);
  if (noteIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Note not found",
    });
  }

  db.splice(noteIndex, 1);

  res.status(200).json({
    success: true,
    message: "Note deleted successfully",
  });
});
