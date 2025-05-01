let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  return prompt("Choose rock, paper or scissors!").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tie");
    return;
  }

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
  
  let message = null;

  if (isHumanWinner) {
    ++humanScore;
    message = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    ++computerScore;
    message = `You lose! ${computerChoice} beats ${humanChoice}`;
  }
  console.log(message);
}

function playGame() {
  for (let i = 0; i < 5; ++i) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log("Congratulation, You won!");
  } else if ( humanScore < computerScore) {
    console.log("Unlucky, You lost!");
  } else {
    console.log("Its tie");
  }
}
