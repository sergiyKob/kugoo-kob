const cartBtn = document.querySelector('[data-cart]')
const cartBtnIcon = document.querySelector('[data-cart-icon] use')
const cart = document.querySelector('.cart')

cartBtn.addEventListener('click', () => {
    if (cart.classList.toggle('cart--open')) {
        cartBtnIcon.setAttribute('xlink:href', 'img/sprite.svg#icon-close')
    } else {
        cartBtnIcon.setAttribute('xlink:href', 'img/sprite.svg#icon-cart-empty')
    }
})