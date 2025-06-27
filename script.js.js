// === MENU HAMBURGER RESPONSIVE ===
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav ul');

  const btn = document.createElement('button');
  btn.className = 'hamburger';
  btn.innerHTML = '&#9776; Menu';
  btn.style.fontSize = '20px';
  btn.style.background = 'none';
  btn.style.border = '2px solid #4CAF50';
  btn.style.color = '#4CAF50';
  btn.style.cursor = 'pointer';
  btn.style.padding = '10px';
  btn.style.margin = '10px';
  btn.style.borderRadius = '5px';
  btn.style.display = 'none';

  nav.parentNode.insertBefore(btn, nav);

  function checkWidth() {
    if (window.innerWidth < 600) {
      btn.style.display = 'block';
      nav.style.display = 'none';
      nav.style.flexDirection = 'column';
    } else {
      btn.style.display = 'none';
      nav.style.display = 'flex';
      nav.style.flexDirection = 'row';
    }
  }

  checkWidth();
  window.addEventListener('resize', checkWidth);

  btn.addEventListener('click', () => {
    nav.style.display = (nav.style.display === 'none') ? 'flex' : 'none';
  });

  // === ANIMATION AU SCROLL ===
  const sections = document.querySelectorAll('section');

  function revealOnScroll() {
    const windowBottom = window.innerHeight + window.scrollY;
    sections.forEach(section => {
      if (windowBottom > section.offsetTop + 50) {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }
    });
  }

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
  });

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // === BOUTON RETOUR EN HAUT ===
  const btnTop = document.createElement('button');
  btnTop.textContent = '↑';
  btnTop.style.position = 'fixed';
  btnTop.style.bottom = '30px';
  btnTop.style.right = '30px';
  btnTop.style.padding = '10px 15px';
  btnTop.style.fontSize = '20px';
  btnTop.style.border = 'none';
  btnTop.style.borderRadius = '50%';
  btnTop.style.backgroundColor = '#4CAF50';
  btnTop.style.color = 'white';
  btnTop.style.cursor = 'pointer';
  btnTop.style.display = 'none';
  btnTop.style.zIndex = '1000';
  document.body.appendChild(btnTop);

  window.addEventListener('scroll', () => {
    btnTop.style.display = (window.scrollY > 300) ? 'block' : 'none';
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
