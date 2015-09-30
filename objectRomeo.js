(function(){
	var romeo = {
		sayCount: 0,
		name: "romeo",
		say: function(statement) {
			console.log(romeo.name + " " + (romeo.sayCount++) + ": " + statement);
		},
		repeat: function(statement, milliseconds) {
			setInterval(function(){
				romeo.say(statement)
			}, milliseconds)
		}
	}


	romeo.repeat("my lips, two blusing pilgims ready stand", 8000)
	romeo.repeat("oh brawling love oh loving hate!", 1000);


var juliet = {
		sayCount: 0,
		name: "juliet",
		say: function(statement) {
			console.log(juliet.name + " " + (juliet.sayCount++) + ": " + statement);
		},
		repeat: function(statement, milliseconds) {
			setInterval(function(){
				juliet.say(statement)
			}, milliseconds)
		}
	}


	juliet.repeat("have not saint's hands?", 8000)
	juliet.repeat("it's hand nor foot nor arm nor face", 1000);
})();




