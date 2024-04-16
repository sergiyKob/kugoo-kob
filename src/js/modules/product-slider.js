import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider = new Swiper('.product-slider', {
    slidesPerView: 1,
    loop: false,
    speed: 400,

    navigation: {
        nextEl: '.product-slider__next',
        prevEl: '.product-slider__prev',
    },
});