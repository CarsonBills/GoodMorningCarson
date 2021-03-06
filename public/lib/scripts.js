var app = angular.module("gmc", []);

app.controller("TabsCtrl", ["$scope", function($scope){
	$scope.tabs = [{
		title: "Poem",
		url: "poem-data.html"
	}, {
		title: "Weather",
		url: "weather-data.html"
	}, {
		title: "Reddit",
		url: "reddit-data.html"
	}, {
		title: "NY Times",
		url: "nytimes-data.html"
	}, {
		title: "Daily Cute",
		url: "cute.html"
	}, {
		title: "Today in History",
		url: "history-data.html"
	}];

	console.log($scope)

	$scope.currentTab = "weather-data.html";

	$scope.onClickTab = function(tab){
		$scope.currentTab = tab.url;
	}
}]);



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
				clearLoading();
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

function clearLoading(){
	$(".loading").hide();
}