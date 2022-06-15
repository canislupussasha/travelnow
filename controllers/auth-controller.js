exports.register = (req, res) =>{
    console.log(req.body);// do basically grabbing all the data that we sent from the form
    res.send("Form submitted"); //show fronted 
   
   
}