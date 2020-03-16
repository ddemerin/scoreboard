const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const updateTeamName = (teamInput, teamName) => {
  const updateName = document.querySelector(teamInput).value
  document.querySelector(teamName).textContent = updateName
}

const updateTeamOne = () => {
  updateTeamName('.team-1-input', '.team-1-name')
}

const updateTeamTwo = () => {
  updateTeamName('.team-2-input', '.team-2-name')
}

const addTeamScore = teamScore => {
  if (document.querySelector(teamScore).textContent < 21) {
    const currentScore = document.querySelector(teamScore).textContent
    const addOne = parseInt(currentScore) + 1
    document.querySelector(teamScore).textContent = addOne
  }
  winState()
}

const addTeamOneScore = () => {
  addTeamScore('.team-1-score')
}

const addTeamTwoScore = () => {
  addTeamScore('.team-2-score')
}

const subTeamScore = teamScore => {
  if (document.querySelector(teamScore).textContent > 0) {
    const currentScore = document.querySelector(teamScore).textContent
    const addOne = parseInt(currentScore) - 1
    document.querySelector(teamScore).textContent = addOne
  }
}

const subTeamOneScore = () => {
  subTeamScore('.team-1-score')
}

const subTeamTwoScore = () => {
  subTeamScore('.team-2-score')
}

const winState = () => {
  if (
    document.querySelector('.team-1-score').textContent === '21' ||
    document.querySelector('.team-2-score').textContent === '21'
  ) {
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    if (document.querySelector('.team-1-score').textContent === '21') {
      document.querySelector('.winner').textContent =
        document.querySelector('.team-1-name').textContent + ' wins!'
      teamTwoLoses()
    } else if (document.querySelector('.team-2-score').textContent === '21') {
      document.querySelector('.winner').textContent =
        document.querySelector('.team-2-name').textContent + ' wins!'
      teamOneLoses()
    }
  }
}

const teamOneWins = () => {}

const teamOneLoses = () => {
  const teamOne = document.querySelector('.team-1-name').textContent
  const loser = teamOne.strike()
  document.querySelector('.team-1-name').innerHTML = loser
}

const teamTwoLoses = () => {
  const teamOne = document.querySelector('.team-2-name').textContent
  const loser = teamOne.strike()
  document.querySelector('.team-2-name').innerHTML = loser
}

const resetGame = () => {
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  document.querySelector('.winner').textContent = ''
  document.querySelector('.team-1-name').textContent = document.querySelector(
    '.team-1-name'
  ).textContent
  document.querySelector('.team-2-name').textContent = document.querySelector(
    '.team-2-name'
  ).textContent
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOne)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwo)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addTeamOneScore)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addTeamTwoScore)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subTeamOneScore)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subTeamTwoScore)
document.querySelector('.reset').addEventListener('click', resetGame)
