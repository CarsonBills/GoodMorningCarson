var express = require('express');
var request = require('request');
var bodyParser = require("body-parser");
var moment = require("moment")
var app = express();
var today = new Object();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');


app.get("/", function(req, res){
	res.render("index", {title: "Good Morning Carson", message: "Good Morning Carson."});
});

app.get("/poem", function(req, res){
	request("http://poetrydb.org/author", function (error, authorResponse, authorBody){
		if (!error && authorResponse.statusCode === 200 
			// && today.date.format("DD MM YYYY") !== moment(new Date()).format("DD MM YYYY")
			) {
			var authors = JSON.parse(authorBody).authors
			var author = authors[Math.floor(Math.random() * authors.length)];
			request("http://poetrydb.org/author/" + author, function(error, poemResponse, poemBody){
				if (!error && poemResponse.statusCode === 200) {
					var poemList = JSON.parse(poemBody)
					var poem = poemList[Math.floor(Math.random() * poemList.length)];
					var poemTitle = poem.title
					var lines = poem.lines
					today.poem = {author: author, poemTitle: poemTitle, lines: lines, message: "Daily Poem"};
					res.send(today.poem);
				}
			});
		}
	});
});

app.get("/weather", function(req, res){
	request("http://api.wunderground.com/api/2d328e775b952ed3/conditions/forecast/q/NY/New_York.json", function (error, weatherResponse, weatherBody){
		if (!error && weatherResponse.statusCode === 200) {
			var weather = JSON.parse(weatherBody)
			var apiDate = moment(new Date(weather["current_observation"]["observation_time_rfc822"].substring(5, 16)));
			today.date = apiDate;


			today.weather = 

			res.send(today.weather);


		}
	});
});

app.listen(8080);