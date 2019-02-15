var express = require('express');
var router = express.Router();
var path = require('path');

// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
router.get('/survey',function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

//    * A default, catch-all route that leads to `home.html` which displays the home page.
//The root path relative to the path where this router is mounted in server.js
router.get('/',function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

//Exports the router as a Node module
module.exports = router;