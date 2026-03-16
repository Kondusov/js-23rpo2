
fetch('http://ip-api.com/json/?fields=city')
  .then(response => {
    if (!response.ok) throw new Error('Ошибка сети'); // Проверка статуса (200-299)
    return response.json(); // Декодирование JSON
  })
  
  .then(data => getCityToHTML(data.city))
  .catch(error => console.error('Ошибка:', error));

function getCityToHTML(city) {
    let greeting = '';

    switch (city) {
        case 'Sochi':
            greeting = "Добро пожаловать в Сочи!";
            break;

        case 'Moscow':
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

    return document.getElementById("i").textContent = greeting;
}