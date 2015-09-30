	function actorFactory(name) {

		
		var actor = {
			name: name,
			sayCount: 1,
			say: function(statement) {
				console.log((actor.sayCount++) + " "+ actor.name + ": " + statement);
			},
			repeat: function(statement, milliseconds) {
				setInterval(function(){
					actor.say(statement)
				}, milliseconds)
			}
		}
		return actor;
	}

	var romeo = actorFactory("romeo");
	var juliet = actorFactory("juliet");
	var benvolio = actorFactory ("benvolio")
	var tybolt = actorFactory ("tybolt")

	romeo.repeat("Ho! lusty gentlemen", 2000)
	romeo.repeat("My lips two blusing pilgrims ready stand", 5000);
	juliet.repeat("have not saint's hands, and holy pilgrims too?", 5000)
	juliet.repeat("Romeo, Romeo, wherefor art thou Romeo?", 2000);
	benvolio.repeat("I do but keep the piece!", 8000)
	tybolt.repeat("What, drawn and talk of peice? i hate the word as I hate hell, all montegues, and thee", 4000)