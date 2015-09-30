(function(){


	function actorFactory(name) {

		var count = 0;
		return function(statement) {
				count = count + 1;
				console.log(name + " " + count + ": " + statement);
			}
	}

	var romeoSay = actorFactory("romeo");
	var julietSay = actorFactory("juliet");
	var benvolioSay = actorFactory ("benvolio")

	romeoSay("nice to meet you juliet");
	julietSay("omigosh");

	setInterval(function () {
		benvolioSay("I do but keep the peice!");
	}, 6000);

	setInterval(function () {
		julietSay("Romeo, romeo, wherefore art thou Romeo?");
	}, 4000);

	setInterval(function(){
		romeoSay("I'm right here goddamnit!!")
	},5000);

})();




