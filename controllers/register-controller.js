const mysql = require('mysql');
const dbConnection = require("../database/db");
const jwl = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = (req, res) =>{
    console.log(req.body);

    const{name, email, password, passwordConfirm} = req.body;

    dbConnection.query('SELECT email FROM users WHERE email = ? ',[email],async(error, results) => {
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('register', {
                danger:'That email is already in use'
            })
        }else if(password !== passwordConfirm ){
            return res.render('register', {
                warning:'Oops! Password does not matches'
            });
        }
        //how many times do you want to hash your password = 8
        let hashedPassword =await bcrypt.hash(password,8)
        console.log(hashedPassword);

        dbConnection.query('INSERT INTO users SET ?', {name: name, email:email,password:hashedPassword }, () => {
            if(error){
                console.log(error);
            }else {
                return res.render('register', {
                    success:'User registered'
                });
            }
        })
    });

}