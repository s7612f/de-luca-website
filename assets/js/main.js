const slides = [
  'assets/img/1.jpg',
  'assets/img/Restaurant-3-2019.jpg',
  'assets/img/5.jpg',
  'assets/img/Restaurant-5-2019.jpg',
  'assets/img/7.jpg',
  'assets/img/8.jpg',
  'assets/img/9.jpg',
  'assets/img/Restaurant-18-of-44.jpg',
  'assets/img/6.jpg',
  'assets/img/12.jpg',
  'assets/img/13.jpg',
  'assets/img/14.jpg',
  'assets/img/15.jpg',
];

let current = 0;
const el = document.getElementById('heroSlideshow');
let slideshowTimer;

function preload(src) {
  return new Promise(r => { const i = new Image(); i.onload = r; i.onerror = r; i.src = src; });
}

async function cycle() {
  const next = (current + 1) % slides.length;
  await preload(slides[next]);
  el.style.backgroundImage = `url('${slides[next]}')`;
  current = next;
}

if (el) {
  el.style.backgroundImage = `url('${slides[0]}')`;
  slideshowTimer = setInterval(cycle, 5000);
}


// Nav scroll state
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle?.addEventListener('click', () => {
  toggle.classList.toggle('open');
  links.classList.toggle('open');
});
links?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.menu-card, .venue-card, .news-card, .two-col, .contact-col, .awards-bar, h2, .section-intro'
).forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// Smooth anchor scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 16;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});
