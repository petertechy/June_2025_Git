function register(event) {
    event.preventDefault();
    var email = document.getElementById('reg-email').value;
    var password = document.getElementById('reg-password').value;
    var message = document.getElementById('reg-message');

    if (!email || !password) {
        message.textContent = 'Please enter both email and password.';
        message.style.color = 'red';
        return false;
    }
    // Save credentials to localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    message.textContent = 'Registration successful! You can now log in.';
    message.style.color = 'green';
    return false;
}

function login(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (!email || !password) {
        message.textContent = 'Please enter both username and password.';
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