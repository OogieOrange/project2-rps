const result = document.getElementById("result");
const resultAnswer = document.getElementById("result-answer");
const choiceBtn = document.getElementsByTagName("button");
let userWin = parseInt(document.getElementById("win"));
let userLoss = parseInt(document.getElementById("loss"));
let userChoice;

for (let choice of choiceBtn) {
    choice.addEventListener("click", function (event) {
        userChoice = event.target.id;
        result.innerHTML = `${userChoice} vs. ${compChoices()}`;
        resultAnswer.innerHTML = `${winner()}`
    });
}

function compChoices() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function winner() {
    let win = userChoice + compChoices();

    if (
        win === "rockrock" ||
        win === "paperpaper" ||
        win === "scissorsscissors"
    ) {
        return "It's a draw.";
    } else if (
        win === "rockscissors" ||
        win === "paperrock" ||
        win === "scissorspaper"
    ) {
        return "Congrats! You win!";
    } else if (
        win === "rockpaper" ||
        win === "paperscissors" ||
        win === "scissorsrock"
    ) {
        return "Sorry. You Lose.";
    }
}