import buildGame from "./buildGame.js";
import displayYouLost from "./youLost.js"
import displayYouWon from "./youWon.js"
import buildWelcome from "./buildWelcome.js"

// First we display welcome page
buildWelcome();


// Welcome section in the game
let start = document.querySelector(".start");
export let loader = document.createElement("div");
loader.className = "loader";
start.onclick = () => {
    document.body.innerHTML = "";
    document.body.appendChild(loader);
    setTimeout(() => {
        document.body.innerHTML = "";
        startGame();
    }, 1000);
};

// Starting The Game
let wrongTrys = 0;

// First we get the data
// We fetch the data from the json object
const response = await fetch("words.json");
const words = await response.json();
let randomWord = "";
async function startGame() {
    randomWord = await buildGame(words);
    checkAnswers();
};

function checkAnswers() {

    let lettersContainer = document.querySelector(".letters");
    let letters = document.querySelectorAll(".letters span");


    lettersContainer.addEventListener("click", (e) => {
        letters.forEach((letter) => {
            if(letter.contains(e.target)) {
                console.log(randomWord);
                // If the letter is in the word we put it in 
                // the row letters
                if(checkLetter(letter.textContent) > -1) {
                   let rowLength = putLetterInRow(letter.textContent);
                   console.log(rowLength);
                   // Check if we completed the word
                    if(randomWord.length == rowLength) {
                        displayYouWon();
                    }
                } else {
                    wrongTrys++;
                    // Check if we did kill the guy :3
                    displayHangedMan(wrongTrys);
                    if(wrongTrys == 10) {
                        displayYouLost();
                    }
                }
                // After prossecing the lettter
                // we check if we need it one more or not
                // if not, we disable it
                disableLetter(letter);
            }
        })
    })
}

// Check if a letter match
function checkLetter(letter) {
    return randomWord.toLowerCase().indexOf(letter.toLowerCase())
}

// Put The letter In Its position 
function putLetterInRow(letter) {
    let currentLettersCount = 0;
    let answerRow = Array.from(document.querySelectorAll(".answer-row > span"));
    for(let i = 0; i < answerRow.length; i++) {
        if(answerRow[i].textContent != "") {
            currentLettersCount++;
        }
    }
    for(let i = 0; i < randomWord.length; i++) {
        if(randomWord[i].toLowerCase() == letter.toLowerCase() && answerRow[i].textContent == "") {
            answerRow[i].textContent = letter;
            return ++currentLettersCount;
        } 
    }
}

// If wrong we display a piece from the draw
function displayHangedMan(wrongTrys) {
    let draws = Array.from(document.querySelectorAll(".the-draw > div"));
    for(let i = 0; i < wrongTrys; i++) {
        draws[i].style.display = "block";
    }
}

// Disable letter if no need to it anymore
function disableLetter(letter) {
    let inAnswer = 0;

    let answerRow = Array.from(document.querySelectorAll(".answer-row > span"));
    answerRow.forEach((answer) => {
        if(answer.textContent.toLocaleLowerCase() == letter.textContent.toLocaleLowerCase()) {
            inAnswer++;
        }
    });

    let inWord = 0;
    for(let i = 0; i < randomWord.length; i++) {
        if(randomWord[i].toLowerCase() == letter.textContent.toLocaleLowerCase()) {
            inWord++;
        }
    }
    // If the letter count is the same in 
    // the ansewr row and in the word then we
    // disable it
    if(inWord == inAnswer) {
        letter.classList.add("clicked");
    }
}

export function startAgain() {
    document.body.innerHTML = "";
    document.body.appendChild(loader);
    
    setTimeout(() => {
        wrongTrys = 0;
        document.body.innerHTML = "";
        startGame();
    }, 1000)
    
}

export function goHome() {
    document.location.reload();
}