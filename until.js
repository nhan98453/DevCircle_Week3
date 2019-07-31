const CHOICES = [
    {
        name: 'Rock', 
        uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' 
    }, 
    { 
        name: 'Paper', 
        uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' 
    }, 
    { 
        name: 'Scissors', 
        uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' 
    } 
];
const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];
const getRoundOutcome = userChoice => {
    const computerChoice = randomComputerChoice();
    let result;
    if (userChoice.name === 'Rock') {
      result = computerChoice.name === 'Scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice.name === 'Paper') {
      result = computerChoice.name === 'Rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice.name === 'Scissors') {
      result = computerChoice.name === 'Paper' ? 'Victory!' : 'Defeat!';
    }
  
    if (userChoice.name === computerChoice.name) result = 'Tie game!';
    return [result, computerChoice];
};
const getResultColor = result => {
	if (result === 'Victory!') return 'green';
	if (result === 'Defeat!') return 'red';
	return null;
};
export {CHOICES,getRoundOutcome,getResultColor};