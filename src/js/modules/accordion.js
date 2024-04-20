console.log('accordion');
const accordionTitle = document.querySelectorAll('[data-title="accordion-title"]');

accordionTitle.forEach(function (item) {
    item.addEventListener('click', showContent);

    function showContent() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('open')
    }
})