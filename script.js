// Typing effect
const phrases = [
  'Étudiant en Data Science & IA',
  'Développeur Python',
  "Explorateur d'agents IA",
  'Game Developer',
];
let i = 0, j = 0, deleting = false;
const el = document.getElementById('typed');

function type() {
  const current = phrases[i];
  if (!deleting) {
    el.textContent = current.slice(0, ++j);
    if (j === current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = current.slice(0, --j);
    if (j === 0) { deleting = false; i = (i + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 50 : 80);
}
type();

// Sticky nav shadow on scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('nav-scrolled', window.scrollY > 20);
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.skill-card, .project-card, .about-card, .contact-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
