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

	romeo.say("hello world")
	romeo.say("hello world")
	romeo.repeat("I'm noisy", 1000);

})();




