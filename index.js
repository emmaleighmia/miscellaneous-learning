(function(){


	var box = document.getElementById("emmas-cool-box");
	var offset = 0;
	
	setInterval(function(){
		offset = offset + 1;
		box.style.left = offset;
	},15)

})();




