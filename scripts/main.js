const body = document.querySelector('body') // body

const burger = document.querySelector('.burger'); // burger
const nav = document.querySelector('.header__nav'); // nav menu
const navItems = document.querySelectorAll('.nav__item'); // nav items
const navLinks = document.querySelectorAll('.nav__link'); // nav link


// BURGER
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('lock');
});

navItems.forEach(elem => {
  elem.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('lock')
  });
});

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (window.innerWidth > 768) {
    document.querySelectorAll('.section').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
        document.querySelectorAll('.nav a').forEach((el) => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        });

        document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
      }
    });
  }
});
