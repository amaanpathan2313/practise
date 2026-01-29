
const express = require('express');
const TodoModel = require('../models/todo.model');

const todoRoute = express.Router();

// add todo
todoRoute.post('/add', async(req, res) => {

    const newTodo = req.body;

    console.log(newTodo)

    try {

            await TodoModel.create(newTodo);

            res.json({msg : "Todo Added ! "})
            
        } catch (err) {
            
            res.json({msg : "Error occur while todo adding", error : err.message})
    }
});

// update todo
todoRoute.patch('/update/:id', async(req, res) => {

    const updateTodo = req.body;
    const {id} = req.params;

    try {

        await TodoModel.findByIdAndUpdate(id, updateTodo);
        res.json({msg : "Todo Update"})
        
    } catch (err) {

        res.json({msg : "Error occur while updating todo", error : err.message})
        
    }

})

// delete todo



module.exports = todoRoute;