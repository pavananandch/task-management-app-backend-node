const taskModel = require("../models/task.model");

const getAllTasks = async (req, res) => {
    try {
        const {userId} = req.query;
        const tasks = await taskModel.find({userId});
        res.status(200).json({tasks});
    } catch (error) {
        console.log("error retriving tasks "+ error);
        res.status(500).json({error});
    }
};

const createTask = async (req, res) => {
    try {
        const {userId, title, description, status, priority, dueDate} = req.body;
        const newTask = new taskModel({
            title,
            description,
            status,
            userId,
            priority,
            dueDate
        });
        const result = await newTask.save();
        res.status(200).json({result});
    } catch (error) {
        console.log("error adding new task "+ error);
        res.status(500).json({error});
    }
};

const updateTask = async (req, res) => {
    try {
        const {title, description, status, priority, dueDate} = req.body;
        const {taskId} = req.params;
        const result = await taskModel.updateOne({_id: taskId}, {$set: {title, description, status, priority, dueDate}});
        res.status(200).json({result});
    } catch (error) {
        console.log("error updating task "+ error);
        res.status(500).json({error});
    }
};

const deleteTask = async (req, res) => {
    try {
        const {taskId} = req.params;
        const result = await taskModel.deleteOne({_id: taskId});
        res.status(200).json({result});
    } catch (error) {
        console.log("error deleting task "+ error);
        res.status(500).json({error});
    }
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}