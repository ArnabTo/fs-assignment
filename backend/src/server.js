const express = require('express')
const port = 5000 || process.env.PORT;
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const app = require('./app')

// load env vars
dotenv.config();

// connect to database
connectDB();



// check servers status
app.get('/ping', (req,res)=>{
    res.send('Server is up and running 🎊')
})

// start server
app.listen(port, ()=> console.log(`server running on port ${port}`))