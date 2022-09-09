document.querySelector('.aboutButton').addEventListener('click', showAboutText);

function showAboutText() {
  document.querySelector('.about-text').classList.toggle('hidden');
}