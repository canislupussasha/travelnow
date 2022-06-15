const mysql = require('mysql');

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

exports.register = (req, res) =>{
    console.log(req.body);// do basically grabbing all the data that we sent from the form
   

   /*
    const name= req.body.name;
    const email= req.body.email;
    const password= req.body.password;
    const passwordConfirm= req.body.passwordConfirm;*/

    //destructuring assignment
    const{name, email, password, passwordConfirm} = req.body;
    //import database

    //email address registered one time
    db.query('SELECT email FROM users WHERE email = ? ',[email],(error, results) => {
        if(error){
            console.log(error);
        }
        if(results > 0){
            return res.render('register', {
                message:'That email is already in use'
            })
        }//Wenn passwort unterschiedlich als Passwort Confirm ist
        else if(password !== passwordConfirm ){
            return res.render('register', {
                message:'Oops! Password does not matches'
            })
        }
    })

    res.send("Form submitted"); //show fronted 
}