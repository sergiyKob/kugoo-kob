const showMoreBtn = document.querySelector('.filter__more');
const showMoreBtnText = document.querySelector('.filter__more-text');
const filterBlock = document.querySelectorAll('.filter__block');

showMoreBtn.addEventListener('click', () => {
    filterBlock.forEach((el) => el.classList.toggle('visible'));
    showMoreBtn.classList.toggle('active');
    showMoreBtnText.textContent = showMoreBtnText.textContent === 'Показать весь фильтр' ? 'Скрыть фильтр' : 'Показать весь фильтр';
});