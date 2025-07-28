import displayFinalPage from "./displayFinalPage.js"

// Display you Lost
export default function displayYouLost() {
    document.body.style.pointerEvents = "none";
    let game = document.querySelector(".game");
    
    let lostContainer = document.createElement("div");
    lostContainer.className = "lost";
    
    let h3 = document.createElement("h3");
    h3.textContent = "You Lost";
    
    let nextButton = document.createElement("div");
    nextButton.className = "next";
    nextButton.textContent = "Next";
    nextButton.style.pointerEvents = "auto";
    
    lostContainer.appendChild(h3);
    lostContainer.appendChild(nextButton);
    
    setTimeout(() => {
        game.appendChild(lostContainer);

        nextButton.addEventListener("click", () => {
            displayFinalPage();
        })
    }, 1000)
    
    return nextButton;
}
