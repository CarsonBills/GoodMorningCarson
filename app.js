var express = require('express');
var request = require('request');
var bodyParser = require("body-parser");
var moment = require("moment");
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var dotenv = require("dotenv");
dotenv.load();
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
	request("http://api.wunderground.com/api/" + process.env.WEATHER + "/conditions/forecast/q/NY/New_York.json", function (error, weatherResponse, weatherBody){
		if (!error && weatherResponse.statusCode === 200) {
			var weather = JSON.parse(weatherBody);
			var apiDate = moment(new Date(weather["current_observation"]["observation_time_rfc822"].substring(5, 16)));
			today.date = apiDate;

			var city = weather["current_observation"]["display_location"]["full"]
			var current = weather["current_observation"]
			var forecast = weather["forecast"]
			today.weather = {forecast: forecast, currentWeather: current, city: city}

// today.currentWeather, today.forecast, {city: city}

			res.send(today.weather);
		}
	});
});

app.get("/history", function(req, res){
	request("http://history.muffinlabs.com/date", function(error, historyResponse, historyBody){
		if (!error && historyResponse.statusCode === 200) {
			var events = JSON.parse(historyBody).data.Events;
			var historicalEvent = events[Math.floor(Math.random() * events.length)];
			res.send(historicalEvent);
		}
	});
});


app.get("/cute", function(req, res){
	request("http://thecatapi.com/api/images/get?format=xml", function(error, cuteResponse, cuteBody){
		if (!error && cuteResponse.statusCode === 200) {
			var xmlCute = parser.parseString(cuteBody, function(err, result){
				var cuteImage = result.response.data[0].images[0].image[0].url[0]
				// XML is really dumb.
				console.log(cuteImage)
				res.send(cuteImage)
			});
		}
	});
});

app.get("/reddit", function(req, res){
	request("https://www.reddit.com/r/all.json?limit=5", function(error, redditResponse, redditBody){
		if (!error && redditResponse.statusCode === 200){
			var redditLinks = JSON.parse(redditBody).data.children;
			console.log(redditLinks);
			res.send(redditLinks);
		}
	})
})

app.listen(8080);