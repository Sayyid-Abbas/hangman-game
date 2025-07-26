import buildGame from "./buildGame.js";

// Welcome section in the game
let start = document.querySelector(".start");
let loader = document.createElement("div");
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
                if(checkLetter(letter.textContent) > -1) {
                    putLetterInRow(letter.textContent);
                } else {
                    wrongTrys++;
                    displayHangedMan(wrongTrys);
                }
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
    let answerRow = Array.from(document.querySelectorAll(".answer-row > span"));
    for(let i = 0; i < randomWord.length; i++) {
        if(randomWord[i].toLowerCase() == letter.toLowerCase() && answerRow[i].textContent == "") {
            answerRow[i].textContent = letter;
            return;
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

    if(inWord == inAnswer) {
        letter.classList.add("clicked");
    }
}