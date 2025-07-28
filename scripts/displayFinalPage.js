import {goHome} from "./main.js"
import {loader} from './main.js'
import {startAgain} from "./main.js"

export default function displayFinalPage() {
    document.body.innerHTML = "";
    document.body.appendChild(loader);
    setTimeout(() => {
        document.body.style.pointerEvents = "auto";
        buildAndAppendFinalPage();
    }, 1000)
}
function buildAndAppendFinalPage() {
    let finalPage = document.createElement("div");
    finalPage.className = "final-page";

    let title = document.createElement("div");
    title.className = "title";
    title.textContent = "Hangman Game";

    let thanks = document.createElement("div");
    thanks.className = "thanks";
    thanks.textContent = "Thanks For Trying Out The Game";

    let buttons = document.createElement('div');
    buttons.className = "buttons";

    let retry = document.createElement("button");
    retry.className = "re-try";
    retry.textContent = "Retry";

    let home = document.createElement("button");
    home.className = "home";
    home.textContent = "Home";

    buttons.appendChild(retry);
    buttons.appendChild(home);

    finalPage.appendChild(title);
    finalPage.appendChild(thanks);
    finalPage.appendChild(buttons);

    document.body.innerHTML = "";
    document.body.appendChild(finalPage);
    
    retry.addEventListener("click", () => {
        startAgain();
    })

    home.addEventListener("click", () => {
        goHome();
    })
}