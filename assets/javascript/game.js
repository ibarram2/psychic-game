var Letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","y","x","y","z"];
var wins = 0;
var losses = 0;
var guessleft = 0;
var guessdisplay = 0;
var computerGuess = Letters[Math.floor(Math.random()*Letters.length)];
console.log(computerGuess);

function reset(){
var computerGuess = Letters[Math.floor(Math.random()*Letters.length)];
}

//var randomGuess = Math.random()

//var userGuess = 

//ask about below

//for (var i = 0; i < 9; i++) {
	document.onkeyup = function() {
	var userguess = String.fromCharCode(event.keyCode).toLowerCase();


	console.log(userguess);





	//if (userguess=='a' || userguess=='b' || userguess=='c' || userguess=='d' || userguess=='e' || userguess=='f' || userguess=='g' || userguess=='h' || userguess=='i' || userguess=='j' || userguess=='k' || userguess=='l' || userguess=='m' || userguess=='n' || userguess=='o' || userguess=='p' || userguess=='q' || userguess=='r' || userguess=='s' || userguess=='t' || userguess=='u' || userguess=='v' || userguess=='w' || userguess=='x' || userguess=='y' || userguess=='z') {
		//if ((userguess=='r') && (computerGuess=='r')){

		if (userguess==computerGuess) {
			alert("you win");
			reset()
			//var computerGuess = Letters[Math.floor(Math.random()*Letters.length)];
		}

			else {	
			alert("Please try again");
		}
			
	}

\\

//}


		



//document.querySelector('#wins').innterHTML = 	

//var stats = "<p>wins: " + wins + "</p>" + "<p>losses: " + losses + "</p>";

//document.querySelector('#stats').innerHTML = stats;

//document.getElementById("demo").innerHTML = "Paragraph changed!";
//function userinput() {
//	alert("function test")
//}
//compare();

//var usersGuess = 
//document.write(Letters);
//console.log(randomGuess)
