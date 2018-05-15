let menuButton = document.querySelector('.nav-menu-button');
let menuItems = document.querySelector('.menu-items');

menuButton.addEventListener('click', showMenu);

function showMenu() {
  menuButton.classList.toggle('open');
  menuItems.classList.toggle('open');
}
