const express = require("express");
const db = require("./db/db")
const path = require("path")
const app = express();
const cookie = require("cookie-parser");
const port = process.env.PORT ?? 7000;

// Serving static files from folder 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'tokyo')));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookie());

// Define Routes
app.use('/', require('./routes/pages'));
app.use('/api', require('./controllers/auth'));

app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`)
    }
});



