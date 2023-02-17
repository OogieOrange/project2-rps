let button = document.getElementById("button-box");
let playChoice = button.getAttribute("data-type");

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
    let copmuter = compChoices();
    let result = playChoice + computer;

    if (playChoice === computer) {
        compMove.textContent = `${computer}. It's a draw.`;
    } else if (
        result = "rockscissors" ||
        result = "paperrock" ||
        result = "scissorspaper"
    ) {
        compMove.textContent = `${computer}. Congrats! You won!`;
    } else if (
        result = "rockspaper" ||
        result = "paperscissors" ||
        result = "scissorsrock"
    ) {
        compMove.textContent = `${computer}... Sorry. You Lost.`;
    }
}