import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slider = new Swiper('.swiper-blog', {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    speed: 500,


    navigation: {
        nextEl: '.swiper-blog__next',
        prevEl: '.swiper-blog__prev',
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