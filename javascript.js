function getComputerChoice(){
    let choice = Math.floor(Math.random()* 3);
    switch (choice){
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let response = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      response = button.textContent;
      if(computerScore < 5 && humanScore < 5){
        playRound(response,getComputerChoice());
      }
      else{
        return;
      }     
    })
  })

  let roundResult = document.createElement('h3');
  let gameWinner = document.createElement('h3');
  let winner = document.createElement('h3');

function playRound(humanChoice, computerChoice){

    if (humanChoice == computerChoice) {
        roundResult.textContent =  (`It's a draw`)
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        roundResult.textContent = (`You Win  ${humanChoice} beat ${computerChoice}`);
        humanScore ++;
    } else if  (humanChoice === 'Paper' && computerChoice === 'Rock') {
        roundResult.textContent = (`You Win  ${humanChoice} beat ${computerChoice}`);
        humanScore ++;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        roundResult.textContent = (`You Win  ${humanChoice} beat ${computerChoice}`);
        humanScore ++;
    } else {
        computerScore ++;
        roundResult.textContent = (`You Lose  ${computerChoice} beat ${humanChoice} `);
    }
  
    if (humanScore > computerScore) {
        winner.textContent =`Round winner Human!  ${humanScore} vs Computer - ${computerScore}`;
    } else if (computerScore > humanScore) {
        winner.textContent =`Round winner computer.  ${computerScore} vs your score ${humanScore}`;
        
    } else {
        winner.textContent = `It's a draw ${computerScore} vs your score ${humanScore}`;
    }
    
    if (computerScore === 5 ) {
        gameWinner.textContent = `Computer wins at ${computerScore} points!`;
        return;
        
    } if (humanScore === 5) {
        gameWinner.textContent = `HUman wins at ${humanScore} points!`;
        return;
    }
    }
    
    let humanScore = 0;
    let computerScore = 0;
    display.appendChild(winner);
    display.appendChild(roundResult);
    display.appendChild(gameWinner);


    
  





