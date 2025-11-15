const mongoose = require('mongoose')
const config = require('./config/config.database.js')

mongoose.connect(config.url).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log("Database not connected due to", err)
})

