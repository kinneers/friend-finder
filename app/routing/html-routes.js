var express = require('express');
var router = express.Router();
var path = require('path');

//GET Route to `/survey` which displays the survey page
router.get('/survey',function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

//Default, catch-all route that leads to `home.html` which displays the home page
router.get('/',function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

router.get('/github', function(req, res) {
    res.status(301).redirect("https://github.com/kinneers/friend-finder");
});

//Exports the router as a Node module
module.exports = router;