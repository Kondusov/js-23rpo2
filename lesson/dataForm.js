const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Страница НЕ перезагрузится
    let resultDataForm = document.getElementById('resultDataForm');
    let user_name = document.getElementById('user_name').value;
    let user_message = document.getElementById('message').value;
    resultDataForm.textContent = 'Имя пользователя :' + user_name 
    + ' Сообщение : ' + user_message;
});