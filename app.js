var express = require('express');
var request = require('request');
var bodyParser = require("body-parser");
var app = express();
var today = new Date()


app.get("/", function(req, res){
	res.render("index.ejs");
});

app.get("/poem", function(req, res){
	request("http://poetrydb.org/author", function (error, authorResponse, authorBody){
		if (!error && authorResponse.statusCode === 200) {
			var authors = JSON.parse(authorBody).authors
			var author = authors[Math.floor(Math.random() * authors.length)];
			request("http://poetrydb.org/author/" + author, function(error, poemResponse, poemBody){
				if (!error && poemResponse.statusCode === 200) {
					var poemList = JSON.parse(poemBody)
					var poem = poemList[Math.floor(Math.random() * poemList.length)];
					var title = poem.title
					var lines = poem.lines
					res.locals = {author: author, title: title, lines: lines};
					res.render("poem.ejs");
				}
			});
		}
	});
});


app.listen(8080);