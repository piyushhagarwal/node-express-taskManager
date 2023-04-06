const getAllNotes = (req, res) => {
  res.send("Hello route byee");
};

const creatNote = (req, res) => {
  res.send("createNote");
};

const updateNote = (req, res) => {
  res.send("updateNote");
};

const getNote = (req, res) => {
  res.send("getNote");
};

const deleteNote = (req, res) => {
  res.send("deleteNote");
};

module.exports = {
  getAllNotes,
  creatNote,
  getNote,
  deleteNote,
  updateNote,
};
