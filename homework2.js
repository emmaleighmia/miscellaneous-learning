/* 
castOnStitches * 2 = crowninc1 
crowninc1 * 2 = crowninc2
Crowninc2 * 1.5 = head 
Head / 2 = jaw
Jaw / 2 = neck
neck * 2 = neckinc1
neckinc1 * 1.5 = shoulders
narrowesttorso = head/2
widesttorso = head


(widesttorso - narrowesttorso)/4 =nessisaryincrows


*/


function printMoppetMath(castOn) {
	var crown1 = castOn * 2;
	var crown2 = crown1 * 2;
	var headWidth = crown2 * 1.5;
	var faceLength = castOn * 1.5;
	var jaw = headWidth / 2;
	var neckWidth = jaw / 2;
	var shoulderInc = neckWidth * 2;
	var shoulderWidth = shoulderInc * 1.5;
	var narrowestTorso = headWidth;
	var widestTorso = headWidth * 2;
	var numberOfTorsoIncDecRows = (widestTorso - narrowestTorso) / 4;
	var incDecTorsoLengh = NumberOfTorsoIncDecRows * 3;
	var totalTorsoLength = numberOfTorsoIncDecRows + castOn;

	console.log ("First Crown Increase: " + crown1);
	console.log ("Second Crown Increase: " + crown2);
	console.log ("Full Head Width: " + headWidth);
	console.log ("Number of rows at full head width: " + faceLength);
	console.log ("First Jaw Decrease: " + jaw);
	console.log ("Full Neck Width: " + neckWidth);
	console.log ("First Shoulder Increase: " + shoulderInc);
	console.log ("Full Shoulder Width: " + shoulderWidth);
	console.log ("Narrowest Part of the Torso: " + narrowestTorso);
	console.log ("Widest Part of the Torso: " + widestTorso); 
	console.log ("Nessisary number of Torso Inc/Dec rows: " + numberOfTorsoIncDecRows);
	console.log ("Total length of the primary inc/dec portion of the torso: " + incDecTorsoLengh);
	console.log ("Total Torso Length: " + totalTorsoLength)
}

