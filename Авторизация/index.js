let registeredUser = null;

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    registeredUser = { username, password };
    console.log(registeredUser);
    
    alert('Регистрация успешна!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
        alert('Авторизация успешна');
    } else {
        alert('Неверное имя пользователя или пароль');
    }
});
