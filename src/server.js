const express = require('express');
const path = require('path');
const cors = require('cors');
// const {addNewVisitor, viewVisitors, deleteVisitor} = require('./functions');

// set up server
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static('public'));

app.use('/single-page-app', express.static(path.join(__dirname, 'public')))

// static web page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/ajax.html"));
});

// // add visitor
// app.post('/single-page-app', (req, res) => {

//     addNewVisitor(req.body.visitor_name, 
//       req.body.assistant, 
//       req.body.visitors_age, 
//       req.body.date_of_visit, 
//       req.body.time_of_visit, 
//       req.body.comments)
      
//   res.sendFile(__dirname + '/ajax.html')
  
// });

app.post('/single-page-app', (req, res) => {
    let {visitor_name,assistant,visitors_age, date_of_visit, time_of_visit, comments} = req.body;
    console.log(visitor_name,assistant,visitors_age, date_of_visit, time_of_visit, comments)

    res.sendFile(__dirname + '/ajax.html');

    // res.status(200).send({
    //     message: "Visitor added"
    // })
});

// viewVisitor
app.get('/view', (req, res) => {
    res.status(200).json({
        visitor_name: "Muntu",
        assistant: "Juju",
        date_of_visit: "17/09/2020",
        time_of_visit: "00:00",
        comments: "testing"
    });
})

// // delete visitor
// app.delete('/deleteVisitor:id', (req, res) => {
//     let id = req.params.id

//     let visitor = await deleteVisitor(id);

//     res.send(visitor);

// })

// port
const server = app.listen(3009, (req, res) => {
    console.log("server listening on port 3009")
})

module.exports = server;