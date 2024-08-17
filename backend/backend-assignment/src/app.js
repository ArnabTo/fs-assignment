const express = require('express');
const cardRoutes = require('./routes/cardRoutes');


const app = express();

// middleware
app.use(express.json());

// routes
app.use('/card', cardRoutes);


module.exports = app;