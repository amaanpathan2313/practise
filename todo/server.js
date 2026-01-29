
const express = require('express');
const connectDataBase = require('./configs/db.config');
const todoRoute = require('./routes/todo.route');
require('dotenv').config()


const app = express();
connectDataBase(); //  Data base connection function

const PORT = process.env.PORT || 3000;

app.use(express.json()); // In-build middleware It sense the incoming JSON data and parse it.

app.get('/test', (req, res) => {
    res.json({msg : "I am test route"})
});

// --------------------------------------------

app.use('/todo', todoRoute)

app.use((req,res) => {
    res.json({msg : "Page Not found ! "})
})

// --------------------------------------------

app.listen(PORT, ()=> {
    console.log(`Server Start on PORT ${PORT}`)
})