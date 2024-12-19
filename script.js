const header = document.querySelector('header');
const mySpan = document.querySelector('.myspan');
const navLink = document.querySelectorAll('nav ul li a');




window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


navLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({ behavior: 'smooth' });
    navLink.forEach((otherLink) => otherLink.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  navLink.forEach((link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= scrollPosition + 1 && section.offsetTop + section.offsetHeight > scrollPosition + 1) {
      navLink.forEach((otherLink) => otherLink.classList.remove('active'));
      link.classList.add('active');
    }
  });
});


const navToggles = document.querySelectorAll('header i');
const nav = document.querySelector('nav');



navToggles.forEach(navToggle => {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
});

const currentYear = new Date().getFullYear();

mySpan.textContent = currentYear;
