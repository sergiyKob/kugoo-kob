const catalogBtn = document.querySelector('.header__catalog-btn')
const catalogBtnIcon = document.querySelector('.header__catalog-btn-icon use')
const catalog = document.querySelector('.catalog')
const categories = document.querySelectorAll('.catalog__item')

// open catalog 
catalogBtn.addEventListener('click', () => {

    if (catalog.classList.toggle('catalog--open')) {
        catalogBtnIcon.setAttribute('xlink:href', 'img/sprite.svg#icon-close')
    } else {
        catalogBtnIcon.setAttribute('xlink:href', 'img/sprite.svg#icon-burger')
    }
})

// hover categories
categories.forEach((item) => {
    item.addEventListener('mouseenter', function () {

        categories.forEach(function (item) {
            item.classList.remove('catalog__item--active');
        })

        this.classList.add('catalog__item--active')

    })
})