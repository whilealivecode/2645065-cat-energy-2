document.body.classList.add('js');
const mapInteractive = document.querySelector('.map--interactive');
const mapFallback = document.querySelectorAll('.map--fallback')[1];

// Показываем интерактивную карту, скрываем картинку-фоллбэк (по умолчанию)
mapInteractive.style.display = 'block';
mapFallback.style.display = 'none';

