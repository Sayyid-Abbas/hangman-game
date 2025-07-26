export default async function buildGame(words) {
    // Make a rondom index to get a random data
    let randomIndex = Math.floor(Math.random() * words.length);
    let chosenData = words[randomIndex];

    // A random index to get a word from the chosen data
    let randomWordIndex = Math.floor(Math.random() * chosenData.elements.length);
    let randomWord = chosenData.elements[randomWordIndex];
    
    let game = document.createElement("div");
    game.className = "game";

    let infoRow = document.createElement("div");
    infoRow.className = "info-row";

    let title = document.createElement("div");
    title.className = "title";
    title.textContent = "HangMan";

    let wordFrom = document.createElement("div");
    wordFrom.className = "word-from";
    wordFrom.textContent = "Word From: ";

    let span = document.createElement("span");
    span.textContent = chosenData.from;
    wordFrom.appendChild(span);

    infoRow.appendChild(title);
    infoRow.appendChild(wordFrom);

    game.appendChild(infoRow);


    let drawLettersRow = document.createElement("div");
    drawLettersRow.className = "draw-letters-row";

    let theDraw = document.createElement("the-draw");
    theDraw.className = "the-draw";

    let floor = document.createElement("div");
    floor.className = "floor";
    
    let stand = document.createElement("div");
    stand.className = "stand";
    
    let standStick = document.createElement("div");
    standStick.className = "stand-stick";
    
    let roap = document.createElement("div");
    roap.className = "roap";
    
    let head = document.createElement("div");
    head.className = "head";
    
    let body = document.createElement("div");
    body.className = "body";
    
    let handLeft = document.createElement("div");
    handLeft.className = "hand-left";
    
    let handRight = document.createElement("div");
    handRight.className = "hand-right";
    
    let legLeft = document.createElement("div");
    legLeft.className = "leg-left";
    
    let legRight = document.createElement("div");
    legRight.className = "leg-right";

    theDraw.appendChild(floor);
    theDraw.appendChild(stand);
    theDraw.appendChild(standStick);
    theDraw.appendChild(roap);
    theDraw.appendChild(head);
    theDraw.appendChild(body);
    theDraw.appendChild(handLeft);
    theDraw.appendChild(handRight);
    theDraw.appendChild(legLeft);
    theDraw.appendChild(legRight);

    drawLettersRow.appendChild(theDraw);

    let letters = document.createElement("div");
    letters.className = "letters";

    const enLetters = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z"
    ];
    for(let i = 0; i < enLetters.length; i++) {
        let span = document.createElement("span");
        span.textContent = enLetters[i];
        letters.appendChild(span);
    }

    drawLettersRow.appendChild(letters);

    let answerRow = document.createElement("div");
    answerRow.className = "answer-row";


    for(let i = 0; i < randomWord.length; i++) {
        let span = document.createElement("span");
        span.className = "has-before";
        // If it has to words we make a space
        if(randomWord[i] == " ") {
            span.classList.remove("has-before");
        }
        answerRow.appendChild(span);
    }

    game.appendChild(drawLettersRow);
    game.appendChild(answerRow);
    document.body.appendChild(game);
    
    
    return randomWord;
}