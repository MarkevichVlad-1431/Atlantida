const navButton = document.querySelector('#topNavButton');
const ul = document.querySelector('#nav')
const lis = document.querySelectorAll('ul > li');

navButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    
    ul.classList.toggle('openMenu');
    navButton.classList.toggle('mobileMenuClose');
    navButton.classList.toggle('mobileMenuOpen');

}