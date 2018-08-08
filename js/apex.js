$(document).ready(function(){

			$("#main").hide();
			$("#mainDisplay").hide();

			$("#btnMore").click(function(){
				$("#home").hide();
				$("#mainDisplay").hide();
				$("#main").show();
			});

			$("#btnHome").click(function(){
				$("#main").hide();
				$("#mainDisplay").hide();
				$("#home").show();
			});

			$("#btnRound").click(function(){
				$("#main").hide();
				$("#home").hide();
				$("#mainDisplay").show();
			});

			
});