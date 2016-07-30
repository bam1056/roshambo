let playerEngagements = 0
let computerEngagements = 0
let playerBouts = 0
let computerBouts = 0
let playerMatches = 0
let computerMatches = 0

const init = () => {
  document.querySelector('.output').textContent = 'Let\'s Play!'
  const rock = document.querySelector('.rock')
  const paper = document.querySelector('.paper')
  const scissors = document.querySelector('.scissors')
  // const reset = document.querySelector('.reset')

  rock.addEventListener('click', () => {
    let result = playGame('Rock')
    setScore(result)
    displayResults(result)
    // checkForWinner()
  })
  paper.addEventListener('click', () => {
    let result = playGame('Paper')
    setScore(result)
    displayResults(result)
    // checkForWinner()
  })
  scissors.addEventListener('click', () => {
    let result = playGame('Scissors')
    setScore(result)
    displayResults(result)
    // checkForWinner()
  })
  // reset.addEventListener('click', () => {
  //   computerEngagements = 0
  //   playerEngagements = 0
  //   displayResults()
  // })
}

document.addEventListener('DOMContentLoaded', init)

const setScore = (result) => {
  switch (result) {
    case 'computer':
      computerEngagements++
      if (computerEngagements > 2) {
        computerBouts++
        displayResults(result)
        computerEngagements = 0
      }
      if (computerBouts > 2) {
        computerMatches++
        displayResults(result)
        computerBouts = 0
        // declareWinner('Computer')
      }
      break
    case 'player':
      playerEngagements++
      if (playerEngagements > 2) {
        playerBouts++
        displayResults(result)
        playerEngagements = 0
      }
      if (playerBouts > 2) {
        playerMatches++
        displayResults(result)
        playerBouts = 0
        // declareWinner('Player')
      }
      break
    case 'tie': break
    default: return null
  }
}

// const declareWinner = (winner) => {
//   playerBouts = 0
//   computerBouts = 0
//   playerEngagements = 0
//   computerEngagements = 0
//   computerMatches = 0
//   playerMatches = 0
//   document.querySelector('.output').textContent = `${winner} Wins The Game!!!`
// }
// const checkForWinner = () => {

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
      document.querySelector('.cEngage').textContent = `Comp Engagements = ${computerEngagements}`
      document.querySelector('.cBout').textContent = `Bouts = ${computerBouts}`
      document.querySelector('.cMatch').textContent = `Computer Score = ${computerMatches}`
      break
    case 'player':
      document.querySelector('.output').textContent = 'Player Wins'
      document.querySelector('.pEngage').textContent = `Player Engagements = ${playerEngagements}`
      document.querySelector('.pBout').textContent = `Player Bouts = ${playerBouts}`
      document.querySelector('.pMatch').textContent = `Player Score = ${playerMatches}`
      break
    case 'tie':
      document.querySelector('.output').textContent = 'Its a Draw!'
      break
    default:
      document.querySelector('.output').textContent = 'Let\'s Play'
      document.querySelector('.compScore').textContent = `Comp Score = ${computerEngagements}`
      document.querySelector('.pScore').textContent = `Player Score = ${playerEngagements}`
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
