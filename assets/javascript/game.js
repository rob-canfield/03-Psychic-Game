// VARIABLES
// • User guess
var userGuess;
// • correct guess
var correctGuess;
// • incorrect guess
var incorrectGuesses = [];
// • guesses remaining
var guessesRemaining = 9;
// • wins
var wins = 0;
// • loses
var loses = 0;
// • computer guesses
var computerLetter;
// • computer letters;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// DOM VARIABLES
var winsDOM =
    document.getElementById("wins");
var losesDOM =
    document.getElementById("loses");
var guessesLeftDOM =
    document.getElementById("guess-count");
var guessesLeftDOM =
    document.getElementById("guesses");


function generateLetter() {
    computerLetter = letters[Math.floor(Math.random() *
    letters.length)];
    // console.log(computerLetter);
}

// generateLetter();



