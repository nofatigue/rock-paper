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

/**
 * 
 * @param {string} playChoice - the choice of the player out of ['Rock', 'Paper', 'Scissors']
 * @param {string} computerChoice - the choice of the computer, out of ['Rock', 'Paper', 'Scissors']
 */
function playRound(playChoice, computerChoice)
{
    // normalize input values
    playChoice = playChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    WinRulesMap = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper', 
        };

    if (!WinRulesMap[playChoice])
        return 'bad input';

    
    

    if (playChoice === computerChoice)
    {
        return 'tie';
    }

    if (WinRulesMap[playChoice] == computerChoice)
        return 'win';
    else 
        return 'lose';

}

let userInput = prompt("Rock, paper or scissors?");
let computerChoice = getComputerChoice();

console.log(playRound(userInput, computerChoice));