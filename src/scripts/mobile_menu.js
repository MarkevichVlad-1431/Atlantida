const navButton = document.querySelector('#topNavButton');
const ul = document.querySelector('#nav')
const lis = document.querySelectorAll('ul > li');

navButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(ul.classList.contains('hidden')){
        ul.classList.toggle('openMenu');
        ul.classList.toggle('hidden');

        // for (const li of lis) {
        //     li.classList.add('openMenu')
        // }
        console.log(ul);
    } else {
        ul.classList.toggle('hidden');
        ul.classList.toggle('openMenu');
        console.log(ul);
    }
}