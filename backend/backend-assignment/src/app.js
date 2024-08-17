const express = require('express');


const app = express();

// middleware
app.use(express.json());

const cardRoutes = require('./routes/cardRoutes');
app.use('/card', cardRoutes);


module.exports = app;