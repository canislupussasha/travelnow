//we need to import Express that we just installed to make sure that we can start our server from nodejs
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("<h1> Hello </h1>")
})

app.listen(5005, () => {
    console.log("Server started on Port 5005");
})