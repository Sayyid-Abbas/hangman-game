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
function startGame() {
    buildGame();
    // checkAnswers();
};
