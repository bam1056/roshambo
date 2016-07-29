let totalComputerScore = 0
let totalPlayerScore = 0

const init = () => {
  document.querySelector('.output').textContent = 'Let\'s Play!'
  const rock = document.querySelector('.rock')
  const paper = document.querySelector('.paper')
  const scissors = document.querySelector('.scissors')
  const reset = document.querySelector('.reset')

  rock.addEventListener('click', () => {
    let result = playGame('Rock')
    score(result)
    displayResults(result)
  })
  paper.addEventListener('click', () => {
    let result = playGame('Paper')
    score(result)
    displayResults(result)
  })
  scissors.addEventListener('click', () => {
    let result = playGame('Scissors')
    score(result)
    displayResults(result)
  })
  reset.addEventListener('click', () => {
    totalComputerScore = 0
    totalPlayerScore = 0
    displayResults()
  })
}

document.addEventListener('DOMContentLoaded', init)
const score = (result) => {
  switch (result) {
    case 'computer': totalComputerScore++
      break
    case 'player': totalPlayerScore++
      break
    case 'tie': break
    default: return null
  }
}
const playGame = (playerChoice) => {
  let compChoice = computerChoice()

  switch (playerChoice) {
    case 'Rock':
      switch (compChoice) {
        case 'Rock':
          return 'tie'
        case 'Paper':
          return 'computer'
        case 'Scissors':
          return 'player'
        default: return null
      }
      break
    case 'Paper':
      switch (compChoice) {
        case 'Rock':
          return 'player'
        case 'Paper':
          return 'tie'
        case 'Scissors':
          return 'computer'
        default: return null
      }
      break
    case 'Scissors':
      switch (compChoice) {
        case 'Rock':
          return 'computer'
        case 'Paper':
          return 'player'
        case 'Scissors':
          return 'tie'
        default: return null
      }
      break
  }
}

const displayResults = (result) => {
  switch (result) {
    case 'computer':
      document.querySelector('.output').textContent = 'Computer Wins'
      document.querySelector('.compScore').textContent = `Comp Score = ${totalComputerScore}`
      break
    case 'player':
      document.querySelector('.output').textContent = 'Player Wins'
      document.querySelector('.pScore').textContent = `Player Score = ${totalPlayerScore}`
      break
    case 'tie':
      document.querySelector('.output').textContent = 'Its a Draw!'
      break
    default:
      document.querySelector('.compScore').textContent = `Comp Score = ${totalComputerScore}`
      document.querySelector('.pScore').textContent = `Player Score = ${totalPlayerScore}`
      let src = document.getElementById('compChoice')
      let existingChild = src.lastChild
      if (existingChild) {
        src.removeChild(existingChild)
      }
  }
}
const computerChoice = () => {
  const gameState = ['Rock', 'Paper', 'Scissors']

  let choice = gameState[Math.floor(Math.random() * gameState.length)]
  if (choice === 'Rock') {
    let img = document.createElement('img')
    img.src = '/images/rock.png'
    let src = document.getElementById('compChoice')
    let existingChild = src.lastChild
    if (existingChild) {
      src.removeChild(existingChild)
    }
    src.appendChild(img)
  } else if (choice === 'Paper') {
    let img = document.createElement('img')
    img.src = '/images/paper.png'
    let src = document.getElementById('compChoice')
    let existingChild = src.lastChild
    if (existingChild) {
      src.removeChild(existingChild)
    }
    src.appendChild(img)
  } else {
    let img = document.createElement('img')
    img.src = '/images/scissors.png'
    let src = document.getElementById('compChoice')
    let existingChild = src.lastChild
    if (existingChild) {
      src.removeChild(existingChild)
    }
    src.appendChild(img)
  }
  return choice
}
