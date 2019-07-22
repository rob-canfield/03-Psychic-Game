// DOM VARIABLES

var winsDOM =
    document.getElementById("wins");

var losesDOM =
    document.getElementById("loses");

var guessesLeftDOM =
    document.getElementById("guess-count");

var guessesDOM =
    document.getElementById("guesses");


 

// VARIABLES

// • computer letters;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// • incorrect guess
var incorrectGuesses = [];

// • guesses remaining
var guessesRemaining = 9;

// • wins
var wins = 0;

// • loses
var loses = 0;




// FUNCTIONS


// • Letter selection (computer) WORKING
function generateLetter() {
    computerLetter = letters[Math.floor(Math.random() *
    letters.length)];
    console.log("Computer: " + computerLetter);
}

generateLetter();




//• Letter Guess (user) WORKING
document.onkeyup = function(event) {
  userGuess = event.key;
  console.log("User: " + userGuess);
}



//• Decrement guesses remaining
guessesLeftDOM.innerHTML = "Guesses Left: " + guessesRemaining;
document.onkeydown = function(){
    guessesLeftDOM.innerHTML = "Guesses Left: " + (guessesRemaining + (-1));
}




