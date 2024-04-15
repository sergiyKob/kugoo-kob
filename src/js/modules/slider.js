import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider = new Swiper('.hero-slider', {
    spaceBetween: 15,
    slidesPerView: 1,
    loop: false,
    speed: 800,

    pagination: {
        el: '.hero-slider__pagination',

        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return (
                '<span class="' +
                currentClass +
                '"></span>' +
                ' / ' +
                '<span class="' +
                totalClass +
                '"></span>'
            );
        },
    },

    navigation: {
        nextEl: '.hero-slider__next',
        prevEl: '.hero-slider__prev',
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