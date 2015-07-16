var express = require('express');
var request = require('request');
var bodyParser = require("body-parser");
var app = express();

app.get("/", function(req, res){
	request("http://poetrydb.org/author", function (error, response, body){
		if (!error && response.statusCode === 200) {
			var authors = JSON.parse(body).authors
			res.locals = {authors: authors};
			res.render("index.ejs");
		}
	});
});

// var options = {
// 	protocol: "http:",
// 	host: "poetrydb.org",
// 	pathname: "/author",
// };

// var searchURL = url.format(options);
// console.log(searchURL);

// app.get("/poetry", function(request, response))



app.listen(8080);