// Starting the game
let start = document.querySelector(".start");
let loader = document.createElement("div");
loader.className = "loader";
start.onclick = () => {
    document.body.innerHTML = "";
    document.body.appendChild(loader);
    setTimeout(() => {
        document.body.innerHTML = "";
        buildGame();
    }, 1000);
};

function buildGame() {

};