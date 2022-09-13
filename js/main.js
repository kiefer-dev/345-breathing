// Logic for showing ABOUT section
document.getElementById('aboutButton').addEventListener('click', showAboutText);
function showAboutText() {
  document.querySelector('.about-text').classList.toggle('hidden');

  if (!document.querySelector('.settings-section').classList.contains('hidden')) {
    document.querySelector('.settings-section').classList.toggle('hidden');
  }
}

// Logic for showing SETTINGS section
document.getElementById('settingsButton').addEventListener('click', showSettings);
function showSettings() {
  document.querySelector('.settings-section').classList.toggle('hidden');

  if (!document.querySelector('.about-text').classList.contains('hidden')) {
    document.querySelector('.about-text').classList.toggle('hidden');
  }
}

// Logic for toggling dark mode, setting up local storage to save setting
document.getElementById('darkModeCheckbox').addEventListener('change', toggleDarkMode);
let darkModeUserSetting = localStorage.getItem('darkMode');
if (darkModeUserSetting === 'true') {
  document.getElementById('darkModeCheckbox').checked = true;
  document.querySelector('body').classList.add('dark-mode');
  document.querySelector('body').classList.remove('light-mode');
} else if (darkModeUserSetting === 'false') {
  document.getElementById('darkModeCheckbox').checked = false;
  document.querySelector('body').classList.add('light-mode');
  document.querySelector('body').classList.remove('dark-mode');
}
function toggleDarkMode() {
  if (document.getElementById('darkModeCheckbox').checked) {
    document.querySelector('body').classList.toggle('light-mode');
    document.querySelector('body').classList.toggle('dark-mode');
    localStorage.setItem('darkMode', true);
  } else {
    document.querySelector('body').classList.toggle('light-mode');
    document.querySelector('body').classList.toggle('dark-mode');
    localStorage.setItem('darkMode', false);
  }
}

// Logic for toggling speech mode, setting up local storage to save setting
document.getElementById('speechModeCheckbox').addEventListener('change', toggleSpeechMode);
let speechModeUserSetting = localStorage.getItem('speechMode');
if (speechModeUserSetting === 'true') {
  document.getElementById('speechModeCheckbox').checked = true;

} else if (speechModeUserSetting === 'false') {
  document.getElementById('speechModeCheckbox').checked = false;

}
function toggleSpeechMode() {
  if (document.getElementById('speechModeCheckbox').checked) {

    localStorage.setItem('speechMode', true);
  } else {

    localStorage.setItem('speechMode', false);
  }
}
