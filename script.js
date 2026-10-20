console.log("Hello World")

function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice(){
  const humanChoiсe = window.prompt("Please choose rock, paper or scissors", "rock");
  return humanChoiсe.toLowerCase();
}


function capitalize (word){
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoiсe, computerChoice){
    if (humanChoiсe === computerChoice){
      console.log("Ничья");
    } else if (
      (humanChoiсe === "rock" && computerChoice === "scissors") || 
      (humanChoiсe === "scissors" && computerChoice === "paper") ||
      (humanChoiсe === "paper" && computerChoice === "rock"))
      {
        console.log(`You win! ${capitalize(humanChoiсe)} beats ${capitalize(computerChoice)}`);
        humanScore++;
    } else {
      console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoiсe)}`);
      computerScore++;
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Раунд ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Счет: Игрок ${humanScore} - ${computerScore} Компьютер\n`);
}

  console.log("=== ИГРА ОКОНЧЕНА ===");
  if (humanScore > computerScore) {
    console.log(`Поздравляю! Вы выиграли со счетом ${humanScore}:${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Победил компьютер со счетом ${computerScore}:${humanScore}`);
  } else {
    console.log("По итогам 5 раундов ничья!");
  }
}

playGame();














