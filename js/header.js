const header = document.querySelector('header'); // Находим элемент с тегом 'header'
const start_img_cofe = document.querySelector('.start-img-cofe'); // Находим элемент с классом 'start-img-cofe'

let startImgCofeHeight = start_img_cofe.clientHeight; // Получаем высоту элемента start_img_cofe

console.log(startImgCofeHeight)

window.addEventListener('scroll', () => { // Добавляем обработчик события прокрутки окна браузера
    const currentScrollPosition = window.scrollY; // Получаем текущую позицию скролла

    if (currentScrollPosition > startImgCofeHeight) { // Если пользователь проскролил высоту start_img_cofe
        header.style.position = 'fixed'; // Фиксируем header
        header.style.top = '0'; // Размещаем header сверху
        header.style.transition = 'top 0.4s ease'; // Добавляем анимацию для свойства 'top'
    } else {
        header.style.position = 'absolute'; // Возвращаем header к абсолютному позиционированию
        header.style.transition = 'top 0.4s ease'; // Добавляем анимацию для свойства 'top'

        if (currentScrollPosition < lastScrollPosition) { // Если скроллим вверх
            header.style.top = '0'; // Показываем header
        } else {
            header.style.top = `-${startImgCofeHeight}px`; // Скрываем header
        }
    }

    lastScrollPosition = currentScrollPosition; // Обновляем последнюю позицию скролла
});