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


app.controller("WeatherController", function(){
	this.weather = weatherData;
});

var weatherData = {
	conditions: "Good"
}

// app.controller("CuteController", function(){
// 	this.cute = cuteData;
// })

// var cuteData = {
// 	url: "http://25.media.tumblr.com/tumblr_ly48t5R2BT1r189uao1_1280.jpg"
// }



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

// function getHistory(){
// 	$.ajax({
// 		url: "/history",
// 		type: "get",
// 		success: function(data) {
// 			console.log(data);
// 		}
// 	});
// }

// function getCute(){
// 	$.ajax({
// 		url: "/cute",
// 		type: "get",
// 		success: function(data) {
// 			console.log(data);
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

// function printHistory(){

// }

// function printCute(){

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