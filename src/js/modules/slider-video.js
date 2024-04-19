import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider = new Swiper('.slider-video', {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,

    navigation: {
        nextEl: '.slider-video__next',
        prevEl: '.slider-video__prev',
    },

    // breakpoints: {
    //     576: {
    //         slidesPerView: 2,
    //     },
    //     1024: {
    //         slidesPerView: 3,
    //     },
    // },
});