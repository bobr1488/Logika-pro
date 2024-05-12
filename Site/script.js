// Збереження кукі
function setCookie(cookieName, cookieValue, expirationDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Виклик функції для збереження кукі з ім'ям "username" і значенням "John Doe" на 30 днів
setCookie("username", "John Doe", 30);
