const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {


    if (!validateInputs()) {
        e.preventDefault();
    }



});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    return true;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let hasErrors = false;

    if(usernameValue === '') {
        hasErrors = setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        hasErrors = setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        hasErrors = setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        hasErrors = setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        hasErrors = setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        hasErrors = setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        hasErrors = setError(password2, "Passwords don't match");
    } else {
        setSuccess(password2);
    }

    return !hasErrors;
};
