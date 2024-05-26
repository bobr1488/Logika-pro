document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const toLoginLink = document.getElementById('to-login');
    const toRegisterLink = document.getElementById('to-register');

    toLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    toRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        alert(`Реєстрація успішна для: ${username}`);
        window.location.href = 'pages/main.html';  // Перенаправлення на основну сторінку
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        alert(`Логін успішний для: ${username}`);
        window.location.href = 'pages/main.html';  // Перенаправлення на основну сторінку
    });
});
