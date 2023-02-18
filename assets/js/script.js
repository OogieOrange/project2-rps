const result = document.getElementById("result");
const resultAnswer = document.getElementById("result-answer");
const choiceBtn = document.getElementsByTagName("button");
let scoreWin = parseInt(document.getElementById("win").innerText);
let scoreLoss = parseInt(document.getElementById("loss").innerText);
let userChoice;
let computer;

/**
 * Retrives and displays both user and computer choices and who wins,
 * and restarts the game when start over button is clicked 
 */
for (let choice of choiceBtn) {
    choice.addEventListener("click", function (event) {
        userChoice = event.target.id;
        if (userChoice === "reset") {
            result.innerHTML = "...";
            resultAnswer.innerHTML = "...";
            document.getElementById("win").innerText = 0;
            document.getElementById("loss").innerText = 0;
        } else {
            result.innerHTML = `${userChoice} vs. ${compChoices()}`;
            resultAnswer.innerHTML = `${winner()}`
        }
    });
}

/**
 * Generates the computers choice
 */
function compChoices() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1) {
        computer = "rock";
        return "rock";
    } else if (compChoice === 2) {
        computer = "paper";
        return "paper";
    } else {
        computer = "scissors";
        return "scissors";
    }
}

/**
 * Concludes who wins and increments the score to 
 * corresponding tally
 */
function winner() {
    let win = userChoice + computer;

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
        document.getElementById("win").innerText = ++scoreWin
        return "Congrats! You win!";
    } else if (
        win === "rockpaper" ||
        win === "paperscissors" ||
        win === "scissorsrock"
    ) {
        document.getElementById("loss").innerText = ++scoreLoss
        return "Sorry. You Lose.";
    }
}