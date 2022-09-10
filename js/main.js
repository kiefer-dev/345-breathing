document.getElementById('aboutButton').addEventListener('click', showAboutText);
function showAboutText() {
  document.querySelector('.about-text').classList.toggle('hidden');

  if (!document.querySelector('.settings-section').classList.contains('hidden')) {
    document.querySelector('.settings-section').classList.toggle('hidden');
  }
}

document.getElementById('settingsButton').addEventListener('click', showSettings);
function showSettings() {
  document.querySelector('.settings-section').classList.toggle('hidden');

  if (!document.querySelector('.about-text').classList.contains('hidden')) {
    document.querySelector('.about-text').classList.toggle('hidden');
  }
}

document.getElementById('darkModeCheckbox').addEventListener('change', toggleDarkMode);
function toggleDarkMode() {
  if (document.getElementById('darkModeCheckbox').checked) {
    document.querySelector('body').classList.toggle('light-mode');
    document.querySelector('body').classList.toggle('dark-mode');
  } else {
    document.querySelector('body').classList.toggle('light-mode');
    document.querySelector('body').classList.toggle('dark-mode');
  }
}


// Todo: set up local storage to remember user's settings