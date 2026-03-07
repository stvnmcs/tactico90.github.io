const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('dots');
const captionEl = document.getElementById('caption');
const captions = [
    'Residency · Chinatown',
    'Chopped Cheese Classic · Brooklyn',
    'Fútbol Diaspora · NYC',
    'Eleven Football Magazine · NYC',
    'Watch Parties · Various',
    'Toy Drive · Washington Heights'
];

let current = 0;
let autoTimer;

// Build dots
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
});

function goTo(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
    captionEl.textContent = captions[current];
}

function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }

document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoTimer);
    next();
    autoTimer = setInterval(next, 4000);
});

document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoTimer);
    prev();
    autoTimer = setInterval(next, 4000);
});

autoTimer = setInterval(next, 4000);

// Dynamic footer year
document.getElementById('footer-year').textContent =
    '© ' + new Date().getFullYear() + ' Táctico 90 · New York City';

// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    menuToggle.textContent = mobileNav.classList.contains('open') ? 'Close' : 'Menu';
});

mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.textContent = 'Menu';
    });
});
