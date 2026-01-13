// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form demo
const form = document.getElementById('contactForm');
const statusEl = document.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  statusEl.textContent = 'Sending...';
  setTimeout(() => {
    statusEl.textContent = 'Thanks! Your message has been received.';
    form.reset();
  }, 1000);
});
