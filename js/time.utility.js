$(document).ready(function(){

	
	setInterval(function(){ 

		var dt = new Date();
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

		document.getElementById("timeNow").innerHTML = time;
		document.getElementById("timeNow1").innerHTML = time;
		document.getElementById("timeNow2").innerHTML = time;
    
	}, 1000);

	
});