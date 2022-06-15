const mysql = require('mysql');
//Dotenv: that loads environment variables from a .env file into process.env
const dotenv = require('dotenv');
//config will read your .env file
dotenv.config({path: './.env'})

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = connection;


