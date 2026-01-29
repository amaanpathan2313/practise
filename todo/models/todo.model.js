const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const TodoModel = mongoose.model('todos', todoSchema);

module.exports = TodoModel;
