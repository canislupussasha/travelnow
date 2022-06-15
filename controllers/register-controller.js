const mysql = require('mysql');
const dbConnection = require("../database/db");

exports.register = (req, res) =>{
    console.log(req.body);

    const{name, email, password, passwordConfirm} = req.body;

    dbConnection.query('SELECT email FROM users WHERE email = ? ',[email],(error, results) => {
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('register', {
                message:'That email is already in use'
            })
        }else if(password !== passwordConfirm ){
            return res.render('register', {
                message:'Oops! Password does not matches'
            })
        }
    })

}