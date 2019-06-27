var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessMe = alphabet[Math.floor(Math.random() * alphabet.length)];
//user's guess from keyboard
var userGuess = document.getElementById("user-guess");
var outRem = document.getElementById("outRem");
var outLosses = document.getElementById("outLosses");
var outWins = document.getElementById("outWins");
var guessArray = [];
//to hold their ten guesses
var guessedLetters = "";
//to makes a for loop of guessed letters which will be concatenated
var remTries = 10;
//remaining Tries until they lose
var wins = 0;
var loss = 0;

function resetGame() {
    guessArray = [];
    userGuess.textContent = "";
    //empties array of guesses when they fail 10 times
    remTries = 10;
    outRem.textContent = remTries;
    //new game means ten more tries
    guessMe = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("The computer chose " + guessMe);
    //computer picks a new letter
    
}

console.log("The computer chose " + guessMe);
//the computer has picked a letter

document.onkeyup = function (event) {
    var theirGuess = event.key;
    //reads keyboard input
    var lcGuess = theirGuess.toLowerCase();
    //makes it lowercase like the alphabet array
    if (((alphabet.indexOf(lcGuess) !== -1)) 
    && (guessArray.indexOf(lcGuess) === -1)){
        console.log("The user has chosen " + lcGuess);
        //doesn't count keystrokes that aren't in the alphabet array
        //doesn't count keystrokes that ARE in the guesses array

        if (lcGuess !== guessMe) {
            guessArray.push(lcGuess);
            //adds wrong guess to the array
            remTries--;
            outRem.textContent = remTries;
            //subtracts a turn
            console.log("so far they've guessed " + guessArray);
            userGuess.textContent = guessArray;

            if (guessArray.length === 10) {
                loss++;
                outLosses.textContent = loss;
                console.log("total losses "+loss);
                resetGame();
            }        
        }

        else {
            wins++    
            outWins.textContent = wins;
            resetGame();
            console.log("total wins: "+wins);
        }
       
    }

}


