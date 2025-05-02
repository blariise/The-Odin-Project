let humanScore = 0;
let computerScore = 0;
const results_div = document.querySelector(".results");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
  return null;
}

function playRound(humanChoice, computerChoice) {
  const isTie = humanChoice === computerChoice;
  let isHumanWinner = false;

  if (humanChoice === "rock" && computerChoice === "scissors") {
    isHumanWinner = true;
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    isHumanWinner = true;
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    isHumanWinner = true;
  }
  
  let result = null;
  if (isTie) {
    result = "Tie";
  } else {
    if (isHumanWinner) {
      ++humanScore;
      result = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      ++computerScore;
      result = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
  }

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(result));
  results_div.appendChild(p);
  console.log(result);
}

