var wins = 0;
var losses = 0;
var guessesLeft = 7;
var lettersGuessed = [];

var winsText = document.getElementById('wins-text');
var lossText = document.getElementById('loss-text');
var remaining = document.getElementById('remaining');
var lettersguessed = document.getElementById('letters-guessed')

var alphabet = ["a","b","c","d","e","f","g"];
var compIndex=Math.floor(Math.random() * alphabet.length);

console.log("compIndex" +compChoice);

var compChoice= alphabet[compIndex];
console.log("Secret Answer:" +compChoice);

document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    console.log(letter);
    if(letter === compChoice){
        alert("You WIN");
    }  
    else{letter ===compChoice){
        alert("Incorrect!");
    }
