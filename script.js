// Animate card entrance
window.addEventListener('DOMContentLoaded', function() {
  const card = document.getElementById('mainCard');
  const logo = document.getElementById('logo');
  setTimeout(() => {
    card.classList.add('visible');
    setTimeout(() => {
      logo.classList.add('bounce');
      setTimeout(() => logo.classList.remove('bounce'), 700);
    }, 600);
  }, 300);
});
