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

/**
 * 
 * Main game logic. Play a series of rounds against the computer.
 * 
 * @returns {string} A message declaring the result of the game.
 */
function game()
{
    const roundNumber = 3;

    let playerWins = 0;
    let computerWins = 0;

    let lastRoundResultMsg = "";
    
    for (let i = 0; i < roundNumber; i++)
    {
        let userInput = prompt(lastRoundResultMsg + " Rock, paper or scissors?");
        let computerChoice = getComputerChoice();
        
        const roundResult = playRound(userInput, computerChoice);

        switch (roundResult)
        {
            default:
                lastRoundResultMsg = "Bad input!";

                i--;
                continue;

            case 'tie':
                lastRoundResultMsg = "TIE!";
                // add another round;
                i--;
                continue;

            case 'win':
                playerWins++;
                lastRoundResultMsg = "WIN!";
                break;
            
            case 'lose':
                computerWins++;
                lastRoundResultMsg = "LOSE!";
                break;

            
        }

        
    }
    
    let gameResult = "Unknown";
    if (playerWins > computerWins) gameResult = "You've won!";
    else if (playerWins < computerWins) gameResult = "You've lost!";
    else if (playerWins == computerWins) gameResult = "A TIE??";

    return gameResult;
}

gameResult = game();

alert(gameResult);
