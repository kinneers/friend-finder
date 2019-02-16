var express = require('express');
var router = express.Router();
var path = require('path');
var friends = require('../data/friends');
var bodyParser = require('body-parser');
var parseURLencoded = bodyParser.urlencoded({ extended: false });

//GET route with the url `/api/friends` (/api is already set in server.js) used to display a JSON of all possible friends
router.get('/friends', function(req, res) {
    res.send(friends);
});

//POST route with url `/api/friends` (/api is already set in server.js) used to handle incoming survey results and the compatibility logic
router.post('/friends', function(req, res) {
    console.log("Submit Button Working");
    friends.push(req.body);
});
    //var currentUserResults = []; //return the array of results from the current user



// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`

//USE: Math.abs(result);

//        * Total Difference: **2 + 1 + 2 =** **_5_**

//USE reduce();

//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.



// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.

//Exports the router as a Node module
module.exports = router;