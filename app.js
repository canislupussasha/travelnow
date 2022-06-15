 //we need to import Express that we just installed to make sure that we can start our server from nodejs
const express = require('express');

//import mysql
const mysql = require('mysql');

//start a server with app
const app = express();

//create all the values for the connection to the database
const db = mysql.createConnection({
    //you need to tell which one is the host, we are running local
    host: 'localhost',
    //we use XAMPP and default user is root
    user: 'root',
    password: '',
    //we have create a new database 'nodejs-login' phpMyAdmin
    database: 'nodejs-login'

});
//we need to connect to the database
//the function can have an error or result
db.connect((error) => {

    if(error){
        console.log(error);
    }else{
        console.log("MYSQL Connected...")
    }

})


//request:  grab something from a form for example 
//response is what you want to send to the frontend
app.get('/', (req, res) => {
    res.send("<h1> Home Page</h1>")
});

//you need to tell which port do you want to listen in order to start your first project
app.listen(5000, () => {
    console.log("Server started on Port 5000");
})