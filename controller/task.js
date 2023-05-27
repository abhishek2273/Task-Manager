const TaskModel = require('../module/taskModule.js')

const getAllTasks = async (req, res) => {
    try {
        const task = await TaskModel.find({})
        res.status(200).json({
            msg: "sucess",
            task: task
        })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await TaskModel.create(req.body)
        task.save();
        res.json({
            message: 'success',
            task
        })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const getTask = async (req, res) => {
    try {
        // const task = await TaskModel.findById(req.params.id)

        const { id: taskID } = req.params
        const task = await TaskModel.findOne({ _id: taskID })
        if (!task) {
            return res.status(502).json({ msg: `No task with id : ${taskID}` })
        }
        res.status(203).json({
            msg: "sucess",
            data: task
        })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await TaskModel.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: 'Task not exis(for delete)' })
        }
        res.status(203).json({
            msg: "delete sucessfully",
            data: task
        })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body,{
            new: true, runValidators: true
        })
        if (!task) {

        }
        res.status(200).json({ id: taskID, data: req.body })
    } catch (error) {

    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}