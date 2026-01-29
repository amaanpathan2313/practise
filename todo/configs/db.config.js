
require('dotenv').config()
const mongoose = require('mongoose');

async function connectDataBase(){
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log("Data Base connect successfully ! ")
        
    } catch (err) {

        console.log(`Error occur while data base connection : ${err.message}`)
        
    }
}


module.exports = connectDataBase;