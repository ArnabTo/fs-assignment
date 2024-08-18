const express = require('express');
const cardRoutes = require('./routes/cardRoutes');



const app = express();

// middleware
app.use(express.json());

// routes
app.use('/card', cardRoutes);

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
    });
  });
  

module.exports = app;