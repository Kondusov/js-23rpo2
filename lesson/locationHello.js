function getCityToHTML(city) {
    let greeting = '';

    switch (city) {
        case 'МСК':
        case 'Москва':
            greeting = "Добро пожаловать в столицу, москвич!";
            break;

        case 'Санкт-Петербург':
        case 'Питер':           // можно указывать несколько вариантов
            greeting = "Привет, петербуржец! Как дела на Невском?";
            break;
        case 'ЕКБ':
        case 'Екатеринбург':
            greeting = "Здравствуй, житель уральской столицы!";
            break;

        case 'Новосибирск':
            greeting = "Привет из Сибири! Холодно у вас?";
            break;
        case 'Сочи':
            greeting = 'Привет из солнечного Сочи!'
            break;

        default:
            greeting = "Привет, странник!";
            break;
    }

    return document.getElementById("parag").textContent = greeting;
}

getCityToHTML(prompt('Введите ваш город:', 'Москва'));