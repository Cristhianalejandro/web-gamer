'use strict';

const navbar = document.querySelector('[data-nav]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const overlay = document.querySelector('[data-overlay]');

// Función para abrir el navbar
const openNavbar = () => {
  navbar.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('active');
};

// Función para cerrar el navbar
const closeNavbar = () => {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('active');
};

// Asignamos eventos
navOpenBtn.addEventListener('click', openNavbar);
navCloseBtn.addEventListener('click', closeNavbar);
overlay.addEventListener('click', closeNavbar);
