// Display you won
export default function displayYouWon() {
    document.body.style.pointerEvents = "none";
    let game = document.querySelector(".game");
    
    let winContainer = document.createElement("div");
    winContainer.className = "win";
    
    let h3 = document.createElement("h3");
    h3.textContent = "You Won!";
    
    let nextButton = document.createElement("div");
    nextButton.className = "next";
    nextButton.textContent = "Next";
    nextButton.style.pointerEvents = "auto";
    
    winContainer.appendChild(h3);
    winContainer.appendChild(nextButton);
    
    setTimeout(() => {
        game.appendChild(winContainer);
    }, 1000)
}