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

//put files like CSS or any JavaScript for the frontend
//__dirname give you the directory of your file where you are
const publicDirectory = path.join(__dirname,'./css')

//Express is also using this directory
app.use(express.static(publicDirectory));

//Parse URL encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));

//Parse JSON bodies(as sent by API clients)
app.use(express.json());

//handlebars template
app.set('view engine', 'hbs');

//Define Routes
app.use('/', require('./routes/pages-router'));
app.use('/auth', require('./routes/register-router'));
app.use('/login', require('./routes/login-router'));


//you need to tell which port do you want to listen in order to start your first project
app.listen(5000, () => {
    console.log("Server started on Port 5000");
})