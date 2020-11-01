//server set up
const express = require('express');
const path = require('path');
const cors = require('cors')
const data = require('./data.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/data', cors(), async (req, res) => {
    res.json(data)
})

// starting server
app.listen(PORT, (error) => {
  if (error) {
    console.log (`Uh oh, there's an error and we can't connect!`)
  }
    console.log(`Server listening at ${PORT} 🛸`);
});

module.exports = app;

//have to run server and client separately on 2 different tabs for now;
