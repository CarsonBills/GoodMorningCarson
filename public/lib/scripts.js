var app = angular.module("gmc", []);

app.directive("poemData", ["$http", function($http){
	return {
		restrict: "E",
		templateUrl: "poem-data.html",
		controller: function(){
			var that = this;
			$http.get("/poem").success(function(data){
				console.log(data)
				that.poem = data;
			});
		},
		controllerAs: "poemData"
	};
}]);


app.directive("cuteData", ["$http", function($http){
	return {
		restrict: "E",
		templateUrl: "cute.html",
		controller: function(){
			var that = this;
			$http.get("/cute").success(function(data){
				that.cute = data;
			});
		},
		controllerAs: "cuteData"
	};
}]);

app.directive("historyData", ["$http", function($http){
	return {
		restrict: "E",
		templateUrl: "history-data.html",
		controller: function(){
			var that = this;
			$http.get("/history").success(function(data){
				console.log(data);
				that.history = data;
			});
		},
		controllerAs: "historyData"
	};
}]);

app.directive("redditData", ["$http", function($http){
	return {
		restrict: "E",
		templateUrl: "reddit-data.html",
		controller: function(){
			var that = this;
			$http.get("/reddit").success(function(data){
				console.log(data);
				that.reddit = data;
			});
		},
		controllerAs: "redditData"
	};
}]);

app.directive("nytimesData", ["$http", function($http){
	return {
		restrict: "E",
		templateUrl: "nytimes-data.html",
		controller: function(){
			var that = this;
			$http.get("/nyttop").success(function(data){
				console.log(data);
				that.nytimes = data
			});
		},
		controllerAs: "nytimesData"
	};
}]);


app.controller("WeatherController", function(){
	this.weather = weatherData;
});

var weatherData = {
	conditions: "Good"
}




// function getWeather(){
// 	$.ajax({
// 		url : "/weather",
// 		type: "get",
// 		success: function(data) {
// 			console.log(data);
// 			printWeather(data);
// 		}
// 	});
// }


// function getRedditLinks(){
// 	$.ajax({
// 		url: "/reddit",
// 		type: "get",
// 		success: function(data){
// 			console.log(data);
// 		}
// 	});
// }

// function getNYTLinks(){
// 	$.ajax({
// 		url: "/nyttop",
// 		type: "get",
// 		success: function(data){
// 			console.log(data);
// 		}
// 	});
// }

// function printNYT(){

// }

// function printReddit(){

// }



// function printWeather(weatherData){
// 	$(".content").append("<p>" + weatherData.city + "</p>");
// }

function updateClock ( ){
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
   
  $("#clock").html(currentTimeString);          
}