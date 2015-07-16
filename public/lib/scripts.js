console.log(":)")

function getPoem(){
	$.ajax({
		url : "/poem",
		success: function(data) {
			poemData = data;
			debugger;
		}
	});
}