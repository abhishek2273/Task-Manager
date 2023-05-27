const express = require('express')
const router = express.Router();

const {getAllTasks, updateTask, getTask, deleteTask, createTask,} = require("../controller/task.js")

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask)
router.route('/:id').delete(deleteTask)


module.exports = router