var express = require('express');
var request = require('request');
var bodyParser = require("body-parser");
var app = express();
var today = 

app.get("/", function(req, res){
	res.render("index.ejs");
});

app.get("/poem", function(req, res){
	request("http://poetrydb.org/author", function (error, response, body){
		if (!error && response.statusCode === 200) {
			var authors = JSON.parse(body).authors
			res.locals = {authors: authors};
			res.render("poem.ejs");
		}
	});
});


app.listen(8080);