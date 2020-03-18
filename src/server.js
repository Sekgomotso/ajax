const express = require('express');
const path = require('path');

// set up server
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/ajax.html"));
});

// add visitor
app.post('/single-page-app', (req, res) => {

    addNewVisitor(req.body.visitor_name, 
      req.body.assistant, 
      req.body.visitors_age, 
      req.body.date_of_visit, 
      req.body.time_of_visit, 
      req.body.comments)
      
  res.sendFile(__dirname + '/ajax.html')
  
});

// Save visitor into database
const addNewVisitor = async(name, nameOfAssistant, age, date, time, comments) => {

    try{

        query = await pool.query(
        "INSERT INTO Visitors (visitor_name, assistant, visitors_age, date_of_visit, time_of_visit, comments) values ($1, $2, $3, $4, $5, $6)", 
        [name, nameOfAssistant, age, date, time, comments]);

        return query.rows

    } catch(err) {
        console.log(err)

    }
};

const server = app.listen(3009, (req, res) => {
    console.log("server listening on port 3009")
})

module.exports = server;