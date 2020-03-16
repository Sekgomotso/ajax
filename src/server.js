const express = require('express');
const path = require('path');

// set up server
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/ajax.html"))
});

app.listen(3009, (req, res) => {
    console.log("server listening on port 3009")
})