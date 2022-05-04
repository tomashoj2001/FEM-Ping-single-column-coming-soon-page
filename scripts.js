const d = document,
    input = d.querySelector('.email'),
    submit = d.querySelector('.submit'),
    alertMsg = d.querySelector('.error');

function checkEmail(e) {
    e.preventDefault();
    pattern = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    
    if (input.value === '') {
        alertMsg.textContent = "Whoops! It looks like you forgot to add your email";
        displayError();
    } else {
        if (!(pattern.test(input.value))) {
            alertMsg.textContent = "Please provide a valid email address";
            displayError();
        } else {
            removeError();
        }
    }
}

function displayError() {
    input.classList.add('active');
    submit.classList.add('active');
    alertMsg.classList.add('active');
}

function removeError() {
    input.classList.remove('active');
    submit.classList.remove('active');
    alertMsg.classList.remove('active');
}

submit.addEventListener('click', checkEmail);