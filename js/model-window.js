// Предположим, что у ваших 7 картинок есть id от 1 до 7

const dataDish = [
    {
        id: 1,
        name: 'Завтрак: "Утро”',
        discription: 'Представьте себе, как вы просыпаетесь под лучами утреннего солнца, проникающими сквозь занавески, и ощущаете приятный аромат свежесваренного кофе, который витает в воздухе. Звуки природы за окном наполняют комнату спокойствием, а на столе представлен богатый ассортимент ярких фруктов, свежих йогуртов, хрустящих хлебцев и нежного меда. Вы наслаждаетесь каждым укусом, ощущая, как ваш организм наполняется витаминами и энергией на весь день. Нежный йогурт со свежими ягодами тает во рту, а ароматный кофе добавляет вам бодрости и живости. Вы чувствуете, что ваш день начинается с правильного настроения и готовы принять все вызовы, которые принесет вам новый день.',
        protein:'20 грамм',
        fat:'15 грамм',
        carbohydrates:'40 грамм',
        nutritional_fibers:'5 грамм',
        calories:'200 Ккл',
        per_ten_grams_of_product: '*Содержание питательных веществ на 100 г продукта:',
        img:'./img/buter-cofe.jpg'
    },
    {
        id: 2,
        name: 'Завтрак: “Сладенький”',
        discription: 'Насладитесь утренним ритуалом, начав день с нежных печенек с шоколадом. Это не просто завтрак, это настоящее утреннее гурманство, источник радости и энергии на весь день. Мягкое тесто, пропитанное ароматным шоколадом, плавится во рту, оставляя за собой невероятно сладкое послевкусие. Каждый кусочек печенья - это звездочка, которая освещает утреннее небо вашего вкуса. Идеальное сочетание нежности и богатства вкуса делает этот завтрак настоящим удовольствием. Погрузитесь в мир сладких снов и нежных моментов, где каждый укус наполняет вас теплыми чувствами и приятными воспоминаниями. Восторгайтесь каждой мельчайшей деталью этого завтрака, ведь она создана специально для вашего утреннего блаженства.',
        protein:'20 грамм',
        fat:'10 грамм',
        carbohydrates:'35 грамм',
        nutritional_fibers:'8 грамм',
        calories:'220 Ккл',
        per_ten_grams_of_product: '*Содержание питательных веществ на 100 г продукта:',
        img:'./img/cooke.jpg'
    },
    {
        id: 3,
        name: 'Обед: “У бабушки”',
        discription: 'Представьте себя за столом, окруженным атмосферой старых добрых времен, ведь на вашем тарелке - настоящий шедевр кулинарного искусства, стейк, приготовленный по лучшим традициям. Этот обед перенесет вас в детство, когда бабушка с любовью готовила каждое блюдо, наполняя его не только вкусом, но и добротой. Стейк такой нежный, что тает во рту, каждый кусочек наполнен ароматом пряностей и добрых воспоминаний. Сказочная теплота этого блюда пробудит в вас чувство счастья и комфорта. Позвольте себе проститься с суетой и погрузиться в мир нежности и вкуса, который создан специально для вас.',
        protein:'20 грамм',
        fat:'10 грамм',
        carbohydrates:'35 грамм',
        nutritional_fibers:'8 грамм',
        calories:'220 Ккл',
        per_ten_grams_of_product: '*Содержание питательных веществ на 100 г продукта:',
        img:'./img/staik.jpg'
    },
    {
        id: 4,
        name: 'Обед: “Итальянский Сет”',
        discription: 'Путешествие по итальянской кухне начинается с первого укуса этой фантастической пиццы. Настоящее произведение искусства, которое вам предложено, станет отправной точкой в мир вкуса и восторга. Сочные начинки, плавленный сыр, хрустящее тесто - каждый элемент этой пиццы задуман с любовью и страстью к гастрономии. Пробуйте каждый кусочек, каждый ингредиент наполнит вас яркими впечатлениями и желанием погрузиться глубже в мир итальянского гастрономического наследия. С этим обедом вы не просто кушаете, вы погружаетесь в истинное итальянское наслаждение, которое остается в вашем сердце и душе надолго.',
        protein:'20 грамм',
        fat:'10 грамм',
        carbohydrates:'35 грамм',
        nutritional_fibers:'8 грамм',
        calories:'220 Ккл',
        per_ten_grams_of_product: '*Содержание питательных веществ на 100 г продукта:',
        img:'./img/pizza.jpg'
    },
    {
        id: 5,
        name: 'Десерт: "Капля росы"',
        discription: 'Легкий, но изысканный десерт, который словно прикосновение капли росы на лепестке розы. Нежность и воздушность каждого укуса заставит вас по-новому взглянуть на сладкую жизнь. Этот десерт - это не просто закуска после обеда, это ритуал, в котором время замедляется, а вкус становится более насыщенным. Погрузитесь в мягкое объятие неповторимого послевкусия, окунитесь в мир сладких фантазий и создайте вокруг себя атмосферу уюта и радости. Довольство и удовлетворение - вот что подарит вам каждая маленькая порция этого волшебного десерта.',
        protein:'20 грамм',
        fat:'10 грамм',
        carbohydrates:'35 грамм',
        nutritional_fibers:'8 грамм',
        calories:'220 Ккл',
        per_ten_grams_of_product: '*Содержание питательных веществ на 100 г продукта:',
        img:'./img/disert-capli.png'
    },
    {
        id: 6,
        name: 'Десерт: "Тепло Сибири"',
        discription: 'Вдохновленный суровыми и прекрасными пейзажами Сибири, десерт "Тепло Сибири" предлагает не только вкусовые, но и эмоциональные ощущения. Этот десерт сочетает в себе традиции сибирской кухни с современными десертными трендами, создавая неповторимое сочетание вкусов и текстур. Основа десерта – ледяной крем, который символизирует бескрайние сибирские зимы, с добавлением мяты, что привносит свежесть и острые нотки. В качестве контраста, поверх крема выкладывается горячий шоколадный глянец, который, стекая, создает эффект таяния снега. В центре десерта – кусочек ванильного мороженого, которое, подобно солнечным лучам, придает тепло и уютное ощущение. Вокруг мороженого – крошка из орехов и кураги, что напоминает о богатстве сибирских лесов и садов. Десерт украшен листьями мяты и тонкими ломтиками апельсина, что добавляет освежающий аромат и визуальное разнообразие. "Тепло Сибири" – это не просто десерт, а история, которую можно прочувствовать и насладиться.',
        protein:'20 грамм',
        fat:'10 грамм',
        carbohydrates:'35 грамм',
        nutritional_fibers:'8 грамм',
        calories:'220 Ккл',
        per_ten_grams_of_product: '*Содержание питательных веществ на 100 г продукта:',
        img:'./img/coctel.png'
    },
    {
        id: 7,
        name: 'Напитки: “Сет на ваш вкус и цвет”',
        discription: 'Этот напиток - настоящее удовольствие для всех ценителей кофе. "Сет на ваш вкус и цвет" представляет собой идеальное сочетание крепкого ароматного кофе и нежной молочной пенки. Тщательно отобранный зерновой состав обеспечивает богатый вкус и насыщенный аромат каждого глотка. Этот кофе покорит ваше сердце своей утонченностью и неповторимым послевкусием. Независимо от того, предпочитаете ли вы классический эспрессо или насыщенный латте, в нашем "сете на ваш вкус и цвет" вы найдете именно то, что подходит именно вам. Насладитесь каждой глоткой и погрузитесь в мир удовольствия от этого идеального кофейного напитка.',
        protein:'20 грамм',
        fat:'10 грамм',
        carbohydrates:'35 грамм',
        nutritional_fibers:'8 грамм',
        calories:'220 Ккл',
        per_ten_grams_of_product: '*Содержание питательных веществ на 100 г продукта:',
        img:'./img/cofes.webp'
    },
];

const dataDishById = dataDish.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
}, {});

function modelWindow(name,discription,protein,fat,carbohydrates,nutritional_fibers,calories,per_ten_grams_of_product,img){
    const modal = document.querySelector(".container-description-dishs");
    modal.classList.add("modal");

    const shadow_layer = document.getElementById("shadow-layer");
    shadow_layer.style.display = "block";

    modal.innerHTML = `

    <div class="cart-dish">

    <div class="dish-one-svg">
        <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.68921 1.68896C15.9826 16.2222 22.2621 22.5046 30.1892 30.189" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M2.18911 29.4734C11.0092 17.5211 17.1451 11.3079 30.4734 1.18914" stroke="#F2ECE9" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
    </div>

    <section>

        <img src='${img}'>

        <div class="content">

            <div class="sub-section-name">

                <p class="scrol-dish">Белки</p>
                <p>Жиры</p>
                <p>Углеводы</p>
                <p>П. волокна</p>
                <p>Каллорийность</p>

            </div>



            <div class="sub-section-quantity">

                <p>${protein}</p>
                <p>${fat}</p>
                <p>${carbohydrates}</p>
                <p>${nutritional_fibers}</p>
                <p>${calories}</p>

            </div>

        </div>

    </section>



    <section>

        <div class="name-dish">
            <h1>${name}</h1>
        </div>

        <div class="discription-dish">
            <p>
                ${discription}
            </p>
        </div>

    </section>

</div>


    `

    modal.style.display = "block";
}

function handleClick(event) {
    const imageId = event.target.id;
    let data = {};

    for(let i = 0; i < dataDish.length; i++) {
        if (dataDish[i].id === parseInt(imageId)) {
            data = {
                name: dataDish[i].name,
                discription: dataDish[i].discription,
                protein: dataDish[i].protein,
                fat: dataDish[i].fat,
                carbohydrates: dataDish[i].carbohydrates,
                nutritional_fibers: dataDish[i].nutritional_fibers,
                calories: dataDish[i].calories,
                per_ten_grams_of_product: dataDish[i].per_ten_grams_of_product,
                img: dataDish[i].img
            };
            break; // Останавливаем цикл, если нашли соответствие
        }
    }

    modelWindow(data.name, data.discription, data.protein, data.fat, data.carbohydrates, data.nutritional_fibers, data.calories, data.per_ten_grams_of_product,data.img);

}
const coffeeImages = document.querySelectorAll("section .img");
coffeeImages.forEach((image) => {
    image.addEventListener("click", handleClick);
});

document.addEventListener("click", function(event) {
    const dish_one_svg = document.querySelector(".dish-one-svg");
    const dish_perenos = document.querySelector(".dish-perenos-modal");

    const targetSection = document.querySelector('.scrol-dish');

    const modal = document.querySelector(".container-description-dishs");
    const header = document.getElementById("header");

    const shadow_layer = document.getElementById("shadow-layer");

    if (dish_one_svg && dish_one_svg.contains(event.target)) {
        console.log(modal)
        console.log(modal.contains(event.target))
        console.log(modal && modal.contains(event.target))
        modal.style.display = "none";
        header.style.display = "grid";
        shadow_layer.style.display = "none";

    }

    if (dish_perenos && dish_perenos.contains(event.target)) {
        console.log(modal)
        console.log(modal.contains(event.target))
        console.log(modal && modal.contains(event.target))
        modal.style.display = "none";
        header.style.display = "grid";
        shadow_layer.style.display = "none";

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


document.querySelector(".dish-perenos").addEventListener('click', function() {
    var targetSection = document.querySelector('.point-perenosa');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
