// Если JS загрузился, то добавляем к body класс .js
document.body.classList.add('js');

const mainNavList = document.querySelector('.main-navigation__list');
const mainNavToggle = document.querySelector('.main-navigation__toggle');

mainNavToggle.classList.add('main-navigation__toggle--closed');
mainNavList.classList.add('main-navigation__list--hidden');
mainNavToggle.addEventListener('click', () => {
  mainNavList.classList.toggle('main-navigation__list--hidden');
  mainNavToggle.classList.toggle('main-navigation__toggle--closed');
});
