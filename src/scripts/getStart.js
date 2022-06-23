const getStartButton = document.querySelector('.sliderText__start');
const aboutUs = document.querySelector('#aboutUs');
getStartButton.addEventListener('click', scrollDown);


function scrollDown() {
    aboutUs.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    
}