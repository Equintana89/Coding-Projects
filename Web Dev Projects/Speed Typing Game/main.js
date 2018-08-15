window.addEventListener('load', init);

//Globals

// Availabel levels
let levels = {
    easy: 4,
    medium: 2,
    hard: 1
}

// To change level
let currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
let wordInput = document.querySelector('#word-input');
let currentWord = document.querySelector('#currentWord');
let scoreDisplay = document.querySelector('#scoreDisplay');
let timeDisplay = document.querySelector('#timeDisplay');
let message = document.querySelector('#message');
let seconds = document.querySelector('#seconds');

let words = [
'aerobics',
'archer',
'archery',
'arena',
'arrow',
'athlete',
'athletics',
'axel',
'badminton',
'ball',
'base',
'baseball',
'basketball',
'bat',
'baton',
'batter',
'batting',
'biathlon',
'bicycle',
'bicycling',
'bike',
'biking',
'billiards',
'bobsleigh',
'bocce',
'boomerang',
'boules',
'bow',
'bowler',
'bowling',
'boxer',
'boxing',
'bunt'
];



//Initialize game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // start matching on word input
    wordInput.addEventListener("input", startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    if(matchWords()) {
       isPlaying = true;
       time = currentLevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
    }

    // If score is -1 display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;

    } else {
        scoreDisplay.innerHTML = score;

    }
}

// Match current word to word input
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!!!"
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick and show random word

function showWord(words) {
    //Generate random array index
    let randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    //Make sure time is not run out
    if(time > 0) {
        //Decrement
        time--;
     } else if(time === 0){
        // Game is over
        isPlaying = false;
     }
     // Show time
     timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = "Game Over!!";
        score = -1;
    }
}
