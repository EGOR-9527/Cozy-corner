const burger_button = document.querySelector('.boorger');
const burger_menu = document.querySelector('.burger-menu');
let click = 0;

burger_menu.style.display = 'none';


burger_button.addEventListener('click', () => {
    click++;

    if (click % 2 === 0) {
        burger_menu.style.display = 'none';
    } else {
        burger_menu.style.display = 'flex';
        
    }
});



document.querySelector(".burger-menu").addEventListener('click', function() {
    const targetSection = document.querySelector('.dish');

    console.log(event.target.className)

    if(event.target.className === "dish-perenos-burger"){

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

    }
});

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;
    console.log(burger_menu.style.top)

    if (currentScrollPosition > 1080) {
        burger_menu.style.position = 'fixed';
        burger_menu.style.top = '5.5vh';
        burger_menu.style.transition = 'top 0.3s ease';


    } else {
        burger_menu.style.position = 'absolute';
        burger_menu.style.transition = 'top 0.3s ease';

        if (currentScrollPosition < lastScrollPosition) {
            burger_menu.style.top = '5.5vh';
        } else {
            burger_menu.style.top = '-500px';
        }

    }

    lastScrollPosition = currentScrollPosition;
});
