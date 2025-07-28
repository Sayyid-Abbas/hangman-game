export default function buildWelcome() {

    document.body.innerHTML = "";

    let welcome = document.createElement("div");
    welcome.className = "welcome";

    let title = document.createElement("div");
    title.className = "title";
    title.append("Welcome To Our ");

    let span = document.createElement("span");
    span.textContent = "Hangman";

    title.append(span);
    title.append(" Game");

    let desc = document.createElement("div");
    desc.className = "desc";
    desc.innerHTML = `
    1. You should guess a random word <br>
    2. Each wrong try will increase the odds of the man hang <br>
    3. You should get the word before the man get hanged
    `

    let start = document.createElement("div");
    start.className = "start";
    start.textContent = "Start";

    welcome.appendChild(title);
    welcome.appendChild(desc);
    welcome.appendChild(start);

    document.body.appendChild(welcome);
}