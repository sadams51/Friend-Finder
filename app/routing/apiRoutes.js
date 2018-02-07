

var friends = require("../data/friends.js");


// function apiRoutes(app) {

module.exports = function(app) {	

//get route - display JSON of all possible friends  
	app.get("/api/friends", function(request, response) {
		response.json(friends);
	});
//post route - to handle incoming survey results & compatibility logic 
	app.post("/api/friends", function(request, response) {
		
		var bestMatch = {
			name: "", 
			photo: "", 
			friendDifference: Infinity
		};

		//take result of user's survey POST and parse it
		var userInput = request.body;
		var userScores = userInput.scores;

		//calculate the difference between the user's scores and each user in the database
		var totalDifference;

		for (var i = 0; i < friends.length; i++) {
			var currentFriend = friends[i];
			totalDifference = 0;

			console.log(currentFriend.name);

			//loop through all scores of each friend 
			for (var j = 0; j < currentFriend.scores.length; J++) {
				var currentFriendScore = currentFriend.scores[j];
				var currentUserScore = userScores[j];

				totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
			}
			//if sum of differences is less than differences of current "best match"
			if (totalDifference <= bestMatch.friendDifference) {
				//reset bestMatch to be new friend 
				bestMatch.name = currentFriend.name;
				bestMatch.photo = currentFriend.photo;
				bestMatch.friendDifference = totalDifference;
			}
		}

		//save user's data to databse 
		friends.push(userInput);

		//return JSON with user's bestMatch - used by HTML
		response.json(bestMatch);


	});
};
