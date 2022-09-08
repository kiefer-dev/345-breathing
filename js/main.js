document.querySelector('.aboutButton').addEventListener('click', showAboutText);

function showAboutText() {
  document.querySelector('.aboutText').classList.toggle('hidden');
}