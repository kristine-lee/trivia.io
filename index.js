//server set up
const express = require('express');
const cors = require('cors');
const data = require('./data');

const app = express();
const port = 3000;

// GET API endpoint
app.get("/api/questions", cors(), (req, res) => {
    res.json(data);
});

// starting server
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
