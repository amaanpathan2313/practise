
const express = require('express');

const app = express();

app.get('/h', (req, res) => {
    res.json({msg : "hi"})
})

app.listen(3000, () => {
    console.log("Server start on port 3000")
})