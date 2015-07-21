var app = angular.module("gmc", []);

app.factory("getPoem", function($http){
	return $http.get("/poem").success(function(data){
		console.log(data)
	})
})

app.controller("PoemController", function(getPoem){
	var that = this;
	getPoem.then(function(data){
		that.poem = data
	})
})

// app.directive("poemData", ["$http", function($http){
// 	return {
// 		restrict: "E",
// 		templateUrl: "poem-data.html",
// 		controller: function(){
// 			var that = this;
// 			$http.get("/poem").success(function(data){
// 				console.log(data)
// 				that.poem = data;
// 			});
// 		},
// 		controllerAs: "poemData"
// 	};
// }]);


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


app.directive("weatherData", ["$http", function($http){
	return {
		restrict: "E",
		templateUrl: "weather-data.html",
		controller: function(){
			var that = this;
			$http.get("/weather").success(function(data){
				console.log(data);
				that.weather = data;
			});
		},
		controllerAs: "weatherData"
	};
}]);


function renderPoem(){
	console.log("ButtonCLick!")
}

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