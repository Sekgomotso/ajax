const express = require('express');
const path = require('path');
const {addNewVisitor, viewVisitors, deleteVisitor} = require('./functions');

// set up server
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/single-page-app', express.static(path.join(__dirname, 'public')))

// static web page
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

// viewVisitor
app.get('/view', (req, res) => {
    return viewVisitors();
})

// delete visitor
app.delete('/deleteVisitor:id', (req, res) => {
    let id = req.params.id

    let visitor = await deleteVisitor(id);

    res.send(visitor);

})

// port
const server = app.listen(3009, (req, res) => {
    console.log("server listening on port 3009")
})

module.exports = server;