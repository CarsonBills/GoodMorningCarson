console.log(":)")

function getPoem(){
	$.ajax({
		url : "/poem",
		type: "get",
		dataType: "json",
		success: function(data) {
			$("h2.author").html(data.author);
			$("h3.title").html(data.poemTitle);
			printPoem(data.lines);
		}
	});
}

function printPoem(arrayOfLines){
	$.each(arrayOfLines, function(i, val){
		$(".lines").append("<p>" + val + "</p>");
	})
}