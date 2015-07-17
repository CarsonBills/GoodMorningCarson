console.log(":)")

function getPoem(){
	$.ajax({
		url : "/poem",
		type: "get",
		dataType: "json",
		success: function(data) {
			console.log(data)
			printPoem(data);
		}
	});
}

function printPoem(poemData){
	$("h2.author").html(poemData.author);
	$("h3.title").html(poemData.poemTitle);
	$.each(poemData.lines, function(i, val){
		$(".lines").append("<p>" + val + "</p>");
	})
}

function getWeather(){
	$.ajax({
		url : "/weather",
		type: "get",
		dataType: "json",
		success: function(data) {
			console.log(data);
			printWeather(data);
		}
	});
}

function printWeather(weatherData){
	$("content").append(weatherData);
}