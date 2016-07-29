const init = () => {
  document.querySelector('.output').textContent = 'Let\'s Play!'
  const rock = document.querySelector('.rock')
  const paper = document.querySelector('.paper')
  const scissors = document.querySelector('.scissors')

  rock.addEventListener('click', () => {
    let result = playGame('Rock')
    displayResults(result)
  })
  paper.addEventListener('click', () => {
    let result = playGame('Paper')
    displayResults(result)
  })
  scissors.addEventListener('click', () => {
    let result = playGame('Scissors')
    displayResults(result)
  })
}

document.addEventListener('DOMContentLoaded', init)

const playGame = (playerChoice) => {
  let compChoice = computerChoice()

//   switch ([compChoice, playerChoice]) {
//     case ['Rock', 'Paper'] || ['Paper', 'Scissors'] || ['Scissors', 'Rock']:
//       return 'player'
//     case ['Rock', 'Scissors'] || ['Paper', 'Rock'] || ['Scissors', 'Paper']:
//       return 'computer'
//     default: return 'tie'
//   }
//   return null
// }
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
  }
  // if (playerChoice === 'Paper') {
  //   if (compChoice === 'Paper') {
  //     return 'tie'
  //   } else if (compChoice === 'Rock') {
  //     return 'player'
  //   } else {
  //     return 'computer'
  //   }
  // }
  // if (playerChoice === 'Scissors') {
  //   if (compChoice === 'Scissors') {
  //     return 'tie'
  //   } else if (compChoice === 'Paper') {
  //     return 'play'
  //   } else {
  //     return 'computer'
  //   }
  // }
  return null
}

const displayResults = (result) => {
  if (result === 'computer') {
    let computerScore = 100
    document.querySelector('.output').textContent = 'Computer Wins'
    document.querySelector('.compScore').textContent = `Comp Score = ${computerScore}`
  } else if (result === 'player') {
    document.querySelector('.output').textContent = 'Player Wins'
    document.querySelector('.pScore').textContent = 'Player Score = 1'
  } else if (result === 'tie') {
    document.querySelector('.output').textContent = 'Its a Draw!'
  } else {
    document.querySelector('.output').textContent = 'Who knows (error)?'
  }
}

const computerChoice = () => {
  const gameState = ['Rock', 'Paper', 'Scissors']

  let choice = gameState[Math.floor(Math.random() * gameState.length)]
  if (choice === 'Rock') {
    // document.getElementById('compChoice').style.display = 'flex'
    let img = document.createElement('img')
    img.src = '/images/rock.png'
    let src = document.getElementById('compChoice')
    let existingChild = src.lastChild
    if (existingChild) {
      src.removeChild(existingChild)
    }
    src.appendChild(img)
  } else if (choice === 'Paper') {
    // document.getElementById('compChoice').style.display = 'flex'
    let img = document.createElement('img')
    img.src = '/images/paper.png'
    let src = document.getElementById('compChoice')
    let existingChild = src.lastChild
    if (existingChild) {
      src.removeChild(existingChild)
    }
    src.appendChild(img)
  } else {
    // document.getElementById('compChoice').style.display = 'flex'
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
