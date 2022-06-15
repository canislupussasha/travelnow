const express = require('express');

const router = express.Router();

//Index Site (Home)
router.get('/', (req, res) =>{
    res.render('index');//file inside of the views index
});

//Register Site
router.get('/register', (req, res) =>{
    res.render('register'); //file inside of the views register
});

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index_.html'));
});*/

module.exports = router;