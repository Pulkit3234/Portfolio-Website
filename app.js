const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hamburger__menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
	console.log('clicked');
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

}

const link = document.querySelectorAll('#link');

link.forEach(n => n.addEventListener('click', mobileMenu));

const closeMenu = () => {
    console.log('clciked')
	hamburger.classList.toggle('active');
};
