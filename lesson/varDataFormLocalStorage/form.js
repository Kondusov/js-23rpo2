// localStorage.clear();

let form = document.querySelector('form');
let user_name;
let message;
let paragraf = document.getElementById('paragraf');

form.addEventListener('submit', (event => {
    // event.preventDefault();
    user_name = document.getElementById('name').value;
    message = document.getElementById('message').value;
    console.log(user_name, message, form);
    paragraf.append(`${user_name}, ${message}`);
    localStorage.setItem(localStorage.length++, `${user_name}, ${message}`);
}));

for (let i = 0; i < localStorage.length; i++) {
    paragraf.append(localStorage.getItem(localStorage.key(i)));
}