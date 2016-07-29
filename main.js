const gameState = ['Rock', 'Paper', 'Scissors']
let compChoice = ''
let playerChoice = ''

const init = () => {
  document.querySelector('.output').textContent = 'Let\'s Play!'
  const rock = document.querySelector('.rock')
  const paper = document.querySelector('.paper')
  const scissors = document.querySelector('.scissors')
  const reset = document.querySelector('.reset')

  reset.addEventListener('click', () => {
    // document.getElementById('compChoice').style.display = 'none'
    let el = document.getElementById('compChoice')
    el.parentNode.removeChild(el)
  })
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
  whoWins(compWins, playerWins)
}
const whoWins = (cWin, pWin) => {
  if (cWin) document.querySelector('.output').textContent = 'Computer Wins'
    else if (pWin) document.querySelector('.output').textContent = 'Player Wins'
    else document.querySelector('.output').textContent = 'Its a Draw!'
}

const computerChoice = (n) => {
  let choice = n[Math.floor(Math.random() * n.length)]
  if (choice === 'Rock') {
    document.getElementById('compChoice').style.display = 'flex'
    let img = document.createElement('img')
    img.src = '/images/rock.png'
    let src = document.getElementById('compChoice')
    src.appendChild(img)
  } else if (choice === 'Paper') {
    document.getElementById('compChoice').style.display = 'flex'
    let img = document.createElement('img')
    img.src = '/images/paper.png'
    let src = document.getElementById('compChoice')
    src.appendChild(img)
  } else {
    document.getElementById('compChoice').style.display = 'flex'
    let img = document.createElement('img')
    img.src = '/images/scissors.png'
    let src = document.getElementById('compChoice')
    src.appendChild(img)
  }
  return choice
}
