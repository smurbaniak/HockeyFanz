function numguess() {
	// the JavaScript you want to run
	var message = 'Invalid entry';
	var name = prompt("What number was on Gordie Howe's jersey when playing for the Red Wings?", "");
if (name == 9) {
	document.getElementById("response").innerHTML='You are correct.' + " You guessed " + name+".";
} else{
	document.getElementById("response").innerHTML='Incorrect. Try again.' + " Your number was " + name+".";
}
}