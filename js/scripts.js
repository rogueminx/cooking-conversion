//back-end biz logic

var makeTbsp = function (number1){
	return number1 * 16;
};

var makeQuarts = function (number1){
	return number1 / 4;
};


//front end user logic
$(document).ready(function() {
	$("form#convert").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#cups").val());
		var result = makeTbsp(number1);
    var result02 = makeQuarts(number1);
		$("#output1").text(result);
    $("#output2").text(result02);
    $("#results").show();
	});
});
