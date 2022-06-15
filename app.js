
const { decodeBase64 } = require('bcryptjs');
const express = require('express');
const mysql = require("mysql");

const app = express();


const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs-login'
});

// localhost/phpmyadmin to call database

database.connect( (error) => {
    if (error){
        console.log(error)
    } else {
        console.log("MYSQL Connected...")
    }
});

app.get("/", (req, res) => {
    res.send("<h1> Hello </h1>")
});


app.listen(5006, () => {
    console.log("Server started on Port 5006");
})