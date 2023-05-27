const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:
    {
        type: String,
        require: [true, "This field is required"],
        trim: true,
        maxlength: [15, 'name can not be more then 15']
    },
    completed:
    {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('task', TaskSchema)
