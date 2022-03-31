const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    /*
      Calling preventefault on the form's submit event prevents the submission
      of the form. I'd suggest only calling it if there are errors on the form.

      This isn't particularly elegant, but it changes the validateInputs
      function to return a boolean value. If there are any errors,
      then validateInputs() will return false and we can use that boolean value
      to determine whether or not we should submit the form.

      Note that this effectively defeats the purpose of adding the success
      classes via setSuccess() as the form will be submitted nearly
      instantaneously, so the user likely won't even notice it. I'd argue that
      there's no need to set success classes as success is indicated by the
      successful submission of the form. I'd probably just get rid of the
      setSuccess stuff unless it's required for the assignment.
    */

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
        hasErrors = setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    return !hasErrors;
};
