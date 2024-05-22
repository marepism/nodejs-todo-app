const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
    try {
        const allTask = await Task.find({});
        res.status(200).json(allTask);
    } catch (err) {
        res.status(500).json(err);
    }
};

const createTasks = async (req, res) => {
    try {
        const createTasks = await Task.create(req.body);
        res.status(200).json(createTasks);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getsingleTasks = async (req, res) => {
    try {
        const getsingleTasks = await Task.findOne({ _id: req.params.id });
        if (!getsingleTasks) {
            return res.status(404).json('_id:${req.params.id}は存在しません。'); ß
        }
        res.status(200).json(getsingleTasks);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateTasks = async (req, res) => {
    try {
        const updateTask = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true,
            }
        );
        if (!updateTask) {
            return res.status(404).json('_id:${req.params.id}は存在しません。'); ß
        }
        res.status(200).json(updateTask);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteTasks = async (req, res) => {
    try {
        const deleteTasks = await Task.findOneAndDelete({ _id: req.params.id });
        if (!deleteTasks) {
            return res.status(404).json('_id:${req.params.id}は存在しません。'); ß
        }
        res.status(200).json(deleteTasks);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getAllTasks,
    createTasks,
    getsingleTasks,
    updateTasks,
    deleteTasks,
};