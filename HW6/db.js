var mysql = require('mysql');
var connect = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"node_db"
});
connect.connect(function(err){
  if(err) throw err;
  console.log("Connected");
  // connect.query("CREATE DATABASE node_db", function(err, result){
  //   if(err) throw err;
  //   console.log("Database created");
  // });

  //---------------------------------------------

  // var query = "CREATE TABLE STUDENTS (name VARCHAR(255), surname VARCHAR(255), grade int)";
  // connect.query(query, function(err,result){
  //   if(err) throw err;
  //   console.log("Table created");
  // });

  //---------------------------------------------

  // var query1 = "INSERT INTO students (name, surname, grade) VALUES ('Drake', 'Doe', (85))";
  // connect.query(query1, function(err, result){
  //   if(err) throw err;
  // console.log("Values are inserted");
  // });

  //------------------------------------------------

  // var query2 = "DELETE from students where name='Drake'";
  // connect.query(query2, function(err, result){
  //   if(err) throw err;
  // console.log("Row deleted" + result.affectedRows);
  // });

  //----------------------------------------------

  var query3 = "UPDATE students SET grade = 76 where name = 'John'";
  connect.query(query3, function(err, result){
    if(err) throw err;
  console.log("Row updated " + result.affectedRows);
  });
});
