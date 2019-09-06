// Global variables
var wins = 0;
var losses = 0;
var guessesLeft = 7;
var lettersGuessed = [];
var compChoice;
var compIndex;
// Available letters and letter choice
var alphabet = ["a","b","c","d","e","f","g", "h"];

// HTML BRIDGES
var $winsText = document.getElementById('wins-text');
var $lossText = document.getElementById('loss-text');
var $remaining = document.getElementById('remaining');
var $lettersGuessed = document.getElementById('letters-guessed')

document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    console.log(letter);
//****TO DO ******* Need to check if we have already guessed the letter */
// *******TO DO********* Make sure I pressed a letter key
    // we have guesses remaining
    if (guessesLeft > 0) {
        //correct guess-win
        if(letter === compChoice){
            alert("You WIN");
            wins++;
            newGame();
        // incorrect guess
        } else {
            alert("Incorrect!");
            lettersGuessed.push(letter);
            guessesLeft--
            renderDisplay();
            // lost
            if (guessesLeft === 0) {
                alert('You lose');
                losses++;
                newGame()
            }
        }
    }
};

// We want functions that handle the display
function renderDisplay() {
    $lettersGuessed.textContent = ""; // this is an inline comment
    $remaining.textContent = "Guesses Left: " + guessesLeft;
    $winsText.textContent = "Wins: " + wins;
    $lossText.textContent = "Losses: " + losses;
    //build a string using a for loop to display in letters guessed
    var string = ""
    for (var i = 0; i < lettersGuessed.length; i++) {
        string += lettersGuessed[i] + " ";
    }
    $lettersGuessed.textContent = string;
}

function newGame() {
   compIndex=Math.floor(Math.random() * alphabet.length);
   compChoice= alphabet[compIndex];
    console.log("Secret Answer:" +compChoice);
   guessesLeft = 7;
   lettersGuessed = [];
   renderDisplay();
}

newGame();