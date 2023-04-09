const Task = require("../models/tasks");

const getAllNotes = async (req, res) => {
  try {
    const tasks = await Task.find({}); // We get all the tasks
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNote = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getNote = async (req, res) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findById(taskID);
    if (!task) {
      return res.status(404).json({ msg: `Task with ${taskID} doesnot exist` });
      //This return keyword is very important otherwise it will give error
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteNote = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).json({ msg: `Task with ${taskId} doesnot exist` });
    }
    res.status(200).json({ msg: "Task successfully deleted" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateNote = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true, // If this field is not added it returns the previous task(before updation) by default
      runValidators: true, //To keep the validations working we use this in update
    });
    if (!task) {
      return res.status(404).json({ msg: `Task with ${taskId} doesnot exist` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  getNote,
  deleteNote,
  updateNote,
};
