 //we need to import Express that we just installed to make sure that we can start our server from nodejs
const express = require('express');

//start a server with app
const app = express();

//request:  grab something from a form for example 
//response is what you want to send to the frontend
app.get('/', (req, res) => {
    res.send("<h1> Home Page</h1>")
});

//you need to tell which port do you want to listen in order to start your first project
app.listen(5000, () => {
    console.log("Server started on Port 5000");
})