const db = require('../db/db');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const {email, password: Npassword} = req.body //Normalpassword
    if(!email || !Npassword) return res.json({status: "error", error: "Please Enter your email and password"});
    else{
        db.query("SELECT email FROM users WHERE email = ?", [email], async(err, result)=>{
            if(err) throw err;
            if (result[0]) return res.json({
                status: "error", error: "Email has already been taken" })
                else{
                    const password = await bcrypt.hash(Npassword[0], 8);
                    db.query("INSERT INTO users SET ?", {email:email, password:password },(error, results) => {
                        if(error) throw error;
                       return res.json({status: "success", success: "User has been registered"});

                    })

            }
        })
    }

}


module.exports = register;

