const Pool = require("pg").Pool;

const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "prospective_umuzi_students",
  password: "pass",
  port: 5432
});

// Save visitor into database
const addNewVisitor = async(name, age, date, time, nameOfAssistant, comment) => {

    try{
    
      query = await pool.query(
        "INSERT INTO Visitors (visitor_name, visitors_age, date_of_visit, time_of_visit, assistant, comments) values ($1, $2, $3, $4, $5, $6)", 
        [name, age, date, time, nameOfAssistant, comment]);
  
        return query.rows
  
    } catch(err) {
      console.log(err)
  
    }
  };

// Return an array of visitor's names and ID
const viewVisitors = async () => {

    try {
      query = pool.query(
        "SELECT id, visitor_name FROM Visitors",
        []);
  
        return query.rows
  
    } catch(err){
       console.log(err)
    }
};

// Delete a visitor
const deleteVisitor = async () => {
    try {
      query = pool.query(
        "DELETE FROM Visitors WHERE id = ${id}", []);
  
        return query.rows
  
    }catch(err){
      console.log(err)
  
    }
  };

  module.exports = {
    addNewVisitor,
    viewVisitors,
    deleteVisitor
  }