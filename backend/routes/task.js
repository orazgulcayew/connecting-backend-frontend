const Task = require("../models/Task");

const router = require("express").Router();

// GET all tasks
router.get("/tasks", async (req, res) => {
    try{
        const tasks = await Task.find()
        console.log("ASDasd", tasks) 
        res.status(200).json(tasks)
    }catch(err){
        res.status(500).json(err)
    }
});


// Creating new task
router.post("/task", async (req, res) => {
    const task = new Task({
        text: req.body.text,
        title: req.body.title
    });

    try{
        const newTask = await task.save();        
        res.status(201).json(newTask)
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;