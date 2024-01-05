document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signupForm').addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = '';

    if (name.length < 2) {
        showError('Navn skal indeholde mindst 2 bogstaver.');
    }

    if (lastName.length < 2) {
        showError('Efternavn skal indeholde mindst 2 bogstaver.');
    }

    if (!validateEmail(email)) {
        showError('Email skal være i korrekt format.');
    }

    if (password.length < 6) {
        showError('Password skal indeholde mindst 6 karakterer.');
    }

    if (password !== confirmPassword) {
        showError('Bekræft password matcher ikke.');
    }
}

function showError(message) {
    var errorContainer = document.getElementById('errorContainer');
    var errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.textContent = message;
    errorContainer.appendChild(errorElement);
}

