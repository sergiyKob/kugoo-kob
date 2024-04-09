const phonesBtn = document.querySelector('.phones__btn');
const phonesBtnIcon = document.querySelector('.phones__btn-icon');
const phonesList = document.querySelector('.phones__list');
const phonesLink = document.querySelectorAll('.phones__link');

phonesBtn.addEventListener('click', () => {
    if (phonesList.classList.toggle('phones__list--open')) {
        phonesBtnIcon.setAttribute('style', 'transform: rotate(45deg)')
    } else {
        phonesBtnIcon.setAttribute('style', 'transform: rotate(0deg)')
    }
});

phonesLink.forEach((item) => {
    item.addEventListener('click', () => {
        phonesList.classList.remove('phones__list--open')
        phonesBtnIcon.setAttribute('style', 'transform: rotate(0deg)')
    })
});