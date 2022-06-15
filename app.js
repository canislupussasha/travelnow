 //we need to import Express that we just installed to make sure that we can start our server from nodejs
const express = require('express');

const session = require('express-session');

const path = require('path');
//import mysql
const mysql = require('mysql');

//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
//import dotenv
const dotenv = require('dotenv');

//config will read your .env file
dotenv.config({path: './.env'})

//start a server with app
const app = express();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//create all the values for the connection to the database
//we use dotenv for sensitive connections
const db = mysql.createConnection({
    //you need to tell which one is the host, we are running local
    host: process.env.DATABASE_HOST,
    //we use XAMPP and default user is root
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    //we have create a new database 'nodejs-login' phpMyAdmin
    database: process.env.DATABASE

});
//put files like CSS or any JavaScript for the frontend
//__dirname give you the directory of your file where you are
const publicDirectory = path.join(__dirname,'./public')

//Express is also using this directory
app.use(express.static(publicDirectory));

//Parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));

//Parse JSON bodies(as sent by API clients)
app.use(express.json());

//handlebars template
app.set('view engine', 'hbs');

//we need to connect to the database
//the function can have an error or result
db.connect((error) => {

    if(error){
        console.log(error);
    }else{
        console.log("MYSQL Connected...")
    }

})

//Define Routes
app.use('/', require('./routes/pages-router'));
app.use('/auth', require('./routes/auth-router'));



//you need to tell which port do you want to listen in order to start your first project
app.listen(5000, () => {
    console.log("Server started on Port 5000");
})