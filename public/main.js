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
  const currentScore = document.querySelector(teamScore).textContent
  console.log(currentScore)
  const addOne = parseInt(currentScore) + 1
  document.querySelector(teamScore).textContent = addOne
}

const addTeamOneScore = () => {
  addTeamScore('.team-1-score')
}

const addTeamTwoScore = () => {
  addTeamScore('.team-2-score')
}

const subTeamScore = teamScore => {
  const currentScore = document.querySelector(teamScore).textContent
  console.log(currentScore)
  const addOne = parseInt(currentScore) - 1
  document.querySelector(teamScore).textContent = addOne
}

const subTeamOneScore = () => {
  subTeamScore('.team-1-score')
}

const subTeamTwoScore = () => {
  subTeamScore('.team-2-score')
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
