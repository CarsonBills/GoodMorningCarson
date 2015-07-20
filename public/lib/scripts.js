var app = angular.module("gmc", []);

app.controller("PoemController", function(){
	this.poem = poemData;
});

var poemData = {
	title: "Poem Title",
	author: "Poem Author",
	lines: ["To be or not to be", "that is the question"]
}

app.controller("WeatherController", function(){
	this.weather = weatherData;
});

var weatherData = {

	conditions: "Good"
}



// function getPoem(){
// 	$.ajax({
// 		url : "/poem",
// 		type: "get",
// 		dataType: "json",
// 		success: function(data) {
// 			console.log(data)
// 			printPoem(data);
// 		}
// 	});
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

// function printPoem(poemData){
// 	$("h2.section").html(poemData.sectionTitle)
// 	$("h2.author").html(poemData.author);
// 	$("h3.title").html(poemData.poemTitle);
// 	$.each(poemData.lines, function(i, val){
// 		$(".lines").append("<p>" + val + "</p>");
// 	})
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