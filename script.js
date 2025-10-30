/* Typing animation */
const typedWords = ["Data Analyst", "Business Analyst", "Machine Learning Enthusiast"];
let tIndex = 0, cIndex = 0, forward = true;
const typedEl = document.getElementById('typed');
const speed = 80;

function typeLoop() {
  if (!typedEl) return;
  const word = typedWords[tIndex];
  if (forward) {
    cIndex++;
    typedEl.textContent = word.substring(0, cIndex);
    if (cIndex === word.length) {
      forward = false;
      setTimeout(typeLoop, 900);
      return;
    }
  } else {
    cIndex--;
    typedEl.textContent = word.substring(0, cIndex);
    if (cIndex === 0) {
      forward = true;
      tIndex = (tIndex + 1) % typedWords.length;
    }
  }
  setTimeout(typeLoop, speed);
}
document.addEventListener('DOMContentLoaded', typeLoop);

/* Back-to-top button */
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) topBtn.style.display = 'block';
  else topBtn.style.display = 'none';
});
topBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

/* Smooth scroll for nav links */
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

/* Mobile nav toggle */
function toggleNav(){
  const nav = document.querySelector('.nav');
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

/* Close mobile nav on outside click (optional) */
document.addEventListener('click', (e)=>{
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  if (!nav || !toggle) return;
  if (!nav.contains(e.target) && !toggle.contains(e.target) && window.innerWidth < 640) {
    nav.style.display = 'none';
  }
});
