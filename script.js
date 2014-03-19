$(document).ready(function(){
	$.getJSON("data.json")
	 .done(function(obj){
		var calc = $("<table />");
		for ( var i = 0 ; i < obj.length ; ++i) {
			calc.append (
				$("<tr />").append(
					$("<td />").html(obj[i].nom),
					$("<td />").html(obj[i].note),
					$("<td />").html(obj[i].description).hide()
				).click(function(){
					var e = $(this).children()[2];
					alert($(e).html());
				})
			);
		}
		$('body').append(calc);
	}).error(function(obj){
		console.log("error.");
		console.log(obj);
	});
});
