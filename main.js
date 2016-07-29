const gameState = ['Rock', 'Paper', 'Scissors']
let compChoice = ''
let playerChoice = ''

const init = () => {
  document.querySelector('.output').textContent = 'Let\'s Play!'
  const rock = document.querySelector('.rock')
  const paper = document.querySelector('.paper')
  const scissors = document.querySelector('.scissors')

  rock.addEventListener('click', () => {
    playerChoice = 'Rock'
    startGame(playerChoice)
  })
  paper.addEventListener('click', () => {
    playerChoice = 'Paper'
    startGame(playerChoice)
  })
  scissors.addEventListener('click', () => {
    playerChoice = 'Scissors'
    startGame(playerChoice)
  })
}

document.addEventListener('DOMContentLoaded', init)

const startGame = (x) => {
  let playerWins = false
  let compWins = false
  compChoice = computerChoice(gameState)
  if (x === 'Rock') {
    if (compChoice === 'Rock') {}
    else if (compChoice === 'Paper') compWins = true
    else playerWins = true
  }
  if (x === 'Paper') {
    if (compChoice === 'Paper') {}
    else if (compChoice === 'Rock') playerWins = true
    else compWins = true
  }
  if (x === 'Scissors') {
    if (compChoice === 'Scissors') {}
    else if (compChoice === 'Paper') playerWins = true
    else compWins = true
  }
  if (compWins) console.log('Computer wins')
    else if (playerWins) console.log('Player wins')
    else console.log('No-one wins')
}

const computerChoice = (n) => {
  let choice = n[Math.floor(Math.random() * n.length)]
  return choice
}
