
//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

//set up express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//?? Do I need this line?? 
//app.use(express.static(path.join(__dirname, "./app/public")));


//ROUTER

//should this be just 'require' - or set the variable?
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
var apiRoutes = require("./app/routing/apiRoutes.js")(app);

//LISTENER

app.listen(PORT, function() {
	console.log("Listening on port " + PORT)
});


