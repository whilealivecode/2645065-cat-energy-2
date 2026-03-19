// Если JS загрузился, то добавляем к body класс .js
document.body.classList.add('js');

const mapInteractive = document.querySelector('.map--interactive');
const mapFallback = document.querySelectorAll('.map--fallback')[1];

// Показываем интерактивную карту, скрываем картинку-фоллбэк (по умолчанию)
mapInteractive.style.display = 'block';
mapFallback.style.display = 'none';

const mainNavList = document.querySelector('.main-navigation__list');
const mainNavToggle = document.querySelector('.main-navigation__toggle');

mainNavToggle.addEventListener('click', () => {
  mainNavList.classList.toggle('main-navigation__list--hidden');
  mainNavToggle.classList.toggle('main-navigation__toggle--closed');
});
