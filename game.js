
/**
 * 
 * @returns {string} One of ['Rock', 'Paper', 'Scissors']
 */
function getComputerChoice()
{
    /* Return one of three options: Rock, Paper, Scissors  */

    const randomNumber = Math.floor(Math.random() * 3);
    const choiceOptions = ['Rock', 'Paper', 'Scissors'];
    
    return choiceOptions[randomNumber];

}

let playerWins = 0;
let computerWins = 0;
let roundStarted = true;
/**
 * 
 * @param {string} playChoice - the choice of the player out of ['Rock', 'Paper', 'Scissors']
 */
function playRound(playChoice)
{
    if (!roundStarted) {
        return;
    }

    // normalize input values
    playChoice = playChoice.toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();

    WinRulesMap = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper', 
        };

    if (!WinRulesMap[playChoice])
        return 'bad input';

    if (playChoice === computerChoice)
    {
        updateResultDiv("Round has ended with a tie!");
    }

    if (WinRulesMap[playChoice] == computerChoice) {
        playerWins++;
        updateResultDiv("You have won the round!");
    }
    else {
        computerWins++;
        updateResultDiv("You have lost the round!");
    }
    
    if (playerWins == 5) {
        updateResultDiv("You have won the game!");
        endRound();
    }

    if (computerWins == 5) {
        updateResultDiv("You have LOST the game!");
        endRound();
    }

    updateScores(playerWins, computerWins);
    updateChoices(playChoice, computerChoice);

}

function updateResultDiv(text) {
    resultDiv = document.querySelector("#result");
    resultDiv.textContent = text;
}

function updateScores(playerScore, computerScore) {
    playerScoreElement = document.querySelector("#playerScore");
    playerScoreElement.textContent = playerScore;
    
    computerScoreElement = document.querySelector("#computerScore");
    computerScoreElement.textContent = computerScore;
}

function updateChoices(playerChoice, computerChoice) {
    playerChoiceElement = document.querySelector("#playerChoice");
    playerChoiceElement.textContent = playerChoice;
    
    computerChoiceElement = document.querySelector("#computerChoice");
    computerChoiceElement.textContent = computerChoice;
}

function initNewRound() {
    updateScores(0, 0);
    updateChoices(" - ", " - ");
    updateResultDiv("Rock, Paper or Scissors?");

    buttons = document.querySelectorAll("#buttons button")
    buttons.forEach(button => {
        button.disabled = false;
    });
    playerWins = 0;
    computerWins = 0;
}

function endRound() {
    buttons = document.querySelectorAll("#buttons button")
    buttons.forEach(button => {
        button.disabled = true;
    });
}

buttons = document.querySelectorAll("#buttons button")
buttons.forEach(element => {
    element.addEventListener("click", () => playRound(element.textContent))
});

newRoundButton = document.querySelector("#newRound");
newRoundButton.addEventListener("click", () => initNewRound());
initNewRound();
