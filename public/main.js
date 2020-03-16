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

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOne)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwo)
document.querySelector('.')
