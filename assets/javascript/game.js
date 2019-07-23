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
  computerLetter = letters[Math.floor(Math.random() *letters.length)];
  // console.log("Computer: " + computerLetter);
}

generateLetter();



// • Letter Guess (user) WORKING
document.onkeyup = function (event) {
  
if (event.keyCode > 64 && event.keyCode < 91) {

    guessesRemaining --;
    guessesLeftDOM.innerHTML = "Guesses Left: " + guessesRemaining;

    userGuess = event.key;
    // console.log("User: " + userGuess);

    incorrectGuesses.push(" " + userGuess);
    guessesDOM.innerHTML = "Your Guesses So Far: " + incorrectGuesses;
    

    

    if (userGuess === computerLetter) {
      wins++;//increase wins by one
      winsDOM.innerHTML = "Wins: " + wins;
      guessesRemaining = 9;//reset guesses remaining
      guessesLeftDOM.innerHTML = "Guesses Left: " + guessesRemaining;
      incorrectGuesses.length = 0;//reset guesses so far
      guessesDOM.innerHTML = "Your Guesses So Far: " + incorrectGuesses;
      generateLetter();//generate a new compter letter
      
    } else if (guessesRemaining === 0) {
      loses++;//increase loses by one
      losesDOM.innerHTML = "Loses: " + loses;
      guessesRemaining = 9;//reset guesses remaining
      guessesLeftDOM.innerHTML = "Guesses Left: " + guessesRemaining;
      incorrectGuesses.length = 0;//reset guesses so far
      guessesDOM.innerHTML = "Your Guesses So Far: " + incorrectGuesses;
      generateLetter();//generate a new compter letter
      
      
    }
  }}



// // DOM VARIABLES

var winsDOM =
document.getElementById("wins");
winsDOM.innerHTML = "Wins: " + wins;


var losesDOM =
document.getElementById("loses");
losesDOM.innerHTML = "Loses: " + loses;

var guessesLeftDOM =
document.getElementById("guess-count");
guessesLeftDOM.innerHTML = "Guesses Left: " + guessesRemaining;


var guessesDOM =
document.getElementById("guesses");
