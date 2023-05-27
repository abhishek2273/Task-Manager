const express = require('express');
const app = express();
const PORT = 3000;
const tasks = require('./routes/task.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

//middleware 
app.use(express.static('./public'))
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks)



//database connection
const MongoDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo)
        console.log('database is Connected');
    } catch (error) {
        throw (error)
    }
}
MongoDB();

app.listen(PORT, (req, res) => {
    console.log(`server is on ${PORT}`);
})

