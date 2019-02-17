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
    //Determine the user's most compatible friend:\

    //Bring in the results from the current user's form
    var currentUserResults = req.body; 
    
    //Convert the current user's scores into a simple array of numbers (these will be strings right now)
    var currentUserScores = currentUserResults.scores;
        
    //Initialize an array to hold the differences of each friend in the database to the current user (the index of the lowest number will correspond to the index of the most compatible friend in the database)
    var compatibility = [];

    function getCompatibilityArray(currentUserScores, callback) {
        //Converts each friends's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`) and compare with current user
        for (var i = 0; i < friends.length; i++) {
            var friendScores = friends[i].scores;
            
            console.log('Friend in Database: ' + friendScores);
            console.log('Current user: ' + currentUserScores);
            var differenceArray = [];
            for (var j = 0; j < friendScores.length; j++) {
                //Get the friend score at indicated index
                var friendNum = parseInt(friendScores[j]);
                //Get the user score at indicated index
                var userNum = parseInt(currentUserScores[j]);
                //Find the absolute value of the difference of the two scores
                var difference = Math.abs(friendNum - userNum);
                //Push the difference to differnceArray
                differenceArray.push(difference);
            }
            //Sum the differences in the differenceArray to arrive at a total difference score for this pair of users
            var totalDifference = differenceArray.reduce((total, amount) => total + amount);
            //push the total difference for the current friend to that friend's index in the compatibility array
            console.log(totalDifference);
            compatibility.push(totalDifference);
        }
        callback();
    }

    var indexOfLowest;
    //Uses a callback to ensure results from the getCompatibilityArray function are returned prior to calculating the index holding the lowest number (which corresponds to the index of the most compatible friend in the array of friend Objects)
    getCompatibilityArray(currentUserScores, function() {
        //Initializes at index 0, then iterates through array and replaces the index number of any numbers found lower than the currently set index
        indexOfLowest = 0;
        for (var i = 1; i < compatibility.length; i++) {
            if (compatibility[i] < compatibility[indexOfLowest]) {
                indexOfLowest = i;
            }
        }
        return indexOfLowest;
    });

    console.log(indexOfLowest);

    //Gets the name of most compatible friend
    var bffName = friends[indexOfLowest].name;
    console.log(bffName);
    var bffPhoto = friends[indexOfLowest].photo;
    console.log(bffPhoto);
    
//    * The closest match will be the user with the least amount of difference.


// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.
    //use res.send() to send back the modal with the closest match... I think???
    //var modal = json.stringify($('#myModal').modal('show'));

    res.send(modal);

    //Push the original currentUserResults Object to the friends array
    friends.push(currentUserResults);
});

//Exports the router as a Node module
module.exports = router;