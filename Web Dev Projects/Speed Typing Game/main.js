window.addEventListener('load', init);

//Globals

// Availabel levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#currentWord');
const scoreDisplay = document.querySelector('#scoreDisplay');
const timeDisplay = document.querySelector('#timeDisplay');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'CHIGOES',
    'CODFISH',
    'COEDITS',
    'DITCHES',
    'DOGFISH',
    'FIDGETS',
    'FITCHES',
    'FOISTED',
    'GHOSTED',
    'GOTHICS',
    'HOGTIED',
    'HOGTIES',
    'HOISTED',
    'SHIFTED',
    'SIGHTED',
    'CESTOI',
    'CHIDES',
    'CHIEFS',
    'CHIGOE',
    'COEDIT',
    'COIFED',
    'COSHED',
    'COSIED',
    'COSTED',
    'DEFOGS',
    'DHOTIS',
    'DICOTS',
    'DIGEST',
    'DIGHTS',
    'DOGIES'
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
    const randIndex = Math.floor(Math.random() * words.length);
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
