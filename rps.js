const buttons = document.querySelectorAll("i");
const Paper = buttons[0];
const Scissor = buttons[1];
const Rock = buttons[2];
const result = document.querySelector("#result");
let score = document.querySelector(".score");

let arr = ["Paper", "Scissor", "Rock"];
function getComputerChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let playerScore = 0;
let computerScore = 0;

score.textContent = "You " + playerScore + " : " + computerScore + " Computer";

Rock.addEventListener("click", function () {
  let computerSelection = getComputerChoice(arr);
  if (computerSelection == "Scissor") {
    result.textContent = "You Win! Rock beats Scissor";
    playerScore++;
  } else if (computerSelection == "Paper") {
    result.textContent = "You Lose! Paper beats Rock";
    computerScore++;
  } else result.textContent = "Tie";
  score.textContent =
    "You " + playerScore + " : " + computerScore + " Computer";

  if (playerScore == 5) {
    result.textContent = "You Win!!!!";
    playerScore = 0;
    computerScore = 0;
    score.textContent =
      "You " + playerScore + " : " + computerScore + " Computer";
  }
  if (computerScore == 5) {
    result.textContent = "!!!You Lose!!!!";
    playerScore = 0;
    computerScore = 0;
    score.textContent =
      "You " + playerScore + " : " + computerScore + " Computer";
  }
});

Paper.addEventListener("click", function () {
  let computerSelection = getComputerChoice(arr);
  if (computerSelection == "Rock") {
    result.textContent = "You Win! Paper beats Rock";
    playerScore++;
  } else if (computerSelection == "Scissor") {
    result.textContent = "You Lose! Scissor beats Paper";
    computerScore++;
  } else result.textContent = "Tie";
  score.textContent =
    "You " + playerScore + " : " + computerScore + " Computer";

  if (playerScore == 5) {
    result.textContent = "You Win!!!!";
    playerScore = 0;
    computerScore = 0;
    score.textContent =
      "You " + playerScore + " : " + computerScore + " Computer";
  }
  if (computerScore == 5) {
    result.textContent = "!!!You Lose!!!!";
    playerScore = 0;
    computerScore = 0;
    score.textContent =
      "You " + playerScore + " : " + computerScore + " Computer";
  }
});

Scissor.addEventListener("click", function () {
  let computerSelection = getComputerChoice(arr);
  if (computerSelection == "Paper") {
    result.textContent = "You Win! Scissor beats Paper";
    playerScore++;
  } else if (computerSelection == "Rock") {
    result.textContent = "You Lose! Rock beats Scissor";
    computerScore++;
  } else result.textContent = "Tie";
  score.textContent =
    "You " + playerScore + " : " + computerScore + " Computer";

  if (playerScore == 5) {
    result.textContent = "You Win!!!!";
    playerScore = 0;
    computerScore = 0;
    score.textContent =
      "You " + playerScore + " : " + computerScore + " Computer";
  }
  if (computerScore == 5) {
    result.textContent = "!!!You Lose!!!!";
    playerScore = 0;
    computerScore = 0;
    score.textContent =
      "You " + playerScore + " : " + computerScore + " Computer";
  }
});
