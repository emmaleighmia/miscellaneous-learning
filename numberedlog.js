(function(){
	var count = 0;

	function numberedLog(statement) {
		count = count + 1;
		console.log(count + ": " + statement);
	}
	numberedLog("What is in a name? -Romeo");
	numberedLog("A rose by any other word");
	numberedLog("Retain that dear perfection -Romeo");
	numberedLog("'Romeo didn't say any of these things' - Emma");

})();
