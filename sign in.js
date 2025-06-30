function login(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (!email || !password) {
        message.textContent = 'Please enter both username and password.';
        message.textContent = 'Please enter both email and password.';
        message.style.color = 'red';
        return false;
    }
        var storedEmail = localStorage.getItem('userEmail');
    var storedPassword = localStorage.getItem('userPassword');
    if (email === storedEmail && password === storedPassword) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        window.location.href = 'index.html'; 
    } else {
        message.textContent = 'Invalid email or password. Please try again.';
        message.style.color = 'red';
    }
    return false;
}


document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', login);
    }
    var regForm = document.getElementById('register-form');
    if (regForm) {
        regForm.addEventListener('submit', register);
    }
});