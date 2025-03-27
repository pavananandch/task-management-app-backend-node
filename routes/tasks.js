const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks.controller");
const {authenticateToken} = require("../middleware/auth.middleware");

router.get('/', authenticateToken, tasksController.getAllTasks);
router.post('/', authenticateToken, tasksController.createTask)
router.put('/:taskId', authenticateToken, tasksController.updateTask);
router.delete('/:taskId', authenticateToken, tasksController.deleteTask);

module.exports = router;