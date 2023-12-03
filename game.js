function getComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * 3);
    const choiceOptions = ['Rock', 'Paper', 'Scissors'];
    
    return choiceOptions[randomNumber];

}

console.log(getComputerChoice());