const mysql = require('mysql');
const dbConnection = require("../database/db");

exports.register = (req, res) =>{
    console.log(req.body);

    const{name, email, password, passwordConfirm} = req.body;

 
 dbConnection.query('SELECT email FROM users WHERE email = ?', [email], (error, results) => {

        if(error) {
        console.log(error);
        }

        //Avoid registering with one email multiple times
        if (results.length > 0) {

        return res.render('register', {
            message: 'That email is already in use!'
        })
        } else if(password !== passwordConfirm) { 
        return res.render('register', {
            message: 'Passwords do not match!'
        });
        }


        dbConnection.query('INSERT INTO users SET ? ', {name: name, email: email, password: password}, (error, results) => {

            if(error) {
            console.log(error);
            } else {
            console.log(results);
                return res.render('register', {
                message: 'User registered'
                });
            }

         })

    }); 
}