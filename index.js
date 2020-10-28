//server set up
const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// GET API endpoint
app.get("/api/questions", cors(), (req, res) => {
    res.json(data);
});

// starting server
app.listen((PORT), (error) => {
  if (error) {
    console.log (`Uh oh, there's an error and we can't connect!`)
  }
    console.log(`Server listening at ${PORT} 🛸`);
});

module.exports = app;
