document.addEventListener('DOMContentLoaded', function() {

    const buttonForm = document.querySelector('.form');
    const name = document.querySelector('.input-name');
    const phone = document.querySelector('.input-phone');
    const email = document.querySelector('.input-email');
    const username = document.querySelector('.input-username');
    const messageEmail = document.querySelector('.email-message-input');
    const textarea = document.querySelector('.form__textarea');




    // name input validation
    function checkName() {

        const nameInput = document.querySelector('.input-name').value;
        const nameComment = document.querySelector('.comment-name');
        const nameRegExp = /^[a-zA-Z]{3,10}$/;

        if (nameRegExp.test(nameInput)) {
            name.classList.remove('valid-noOk');
            name.classList.add('valid-ok');
            nameComment.innerHTML = 'Correct name';
            nameComment.style.color = 'green';
        } else {
            name.classList.add('valid-noOk');
            name.classList.remove('valid-ok');
            nameComment.innerHTML = 'Incorrect name';
            nameComment.style.color = 'red';
        }

    }

    function checkEmail() {

        const emailInput = document.querySelector('.input-email').value;
        const commentEmail = document.querySelector('.comment-email');
        const emailRegExp = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z_.-]+\.[a-zA-Z]{2,3}$/;

        if (emailRegExp.test(emailInput)) {
            email.classList.add('valid-ok');
            email.classList.remove('valid-noOk');
            commentEmail.innerHTML = 'Correct e-mail address';
            commentEmail.style.color = 'green';
        } else {
            email.classList.add('valid-noOk');
            email.classList.remove('valid-ok');
            commentEmail.innerHTML = 'Incorrect e-mail address';
            commentEmail.style.color = 'red';
        }

    }

    //phone input validation

    function checkPhone() {

        const phoneInput = document.querySelector('.input-phone').value;
        const commentPhone = document.querySelector('.comment-phone');
        const phoneRegExp = /^[0-9]{9}$/;

        if (phoneRegExp.test(phoneInput)) {
            phone.classList.add('valid-ok');
            phone.classList.remove('valid-noOk');
            commentPhone.innerHTML = 'Correct phone number';
            commentPhone.style.color = 'green';
        } else {
            phone.classList.add('valid-noOk');
            phone.classList.remove('valid-ok');
            commentPhone.innerHTML = 'Phone number should contains 9 numbers';
            commentPhone.style.color = 'red';
        }

    }

    // username input validation
    function checkUsername() {

        const usernameInput = document.querySelector('.input-username').value;
        const commentUsername = document.querySelector('.comment-username');
        const usernameRegExp = /^[a-zA-Z]{3,15}$/;

        if (usernameRegExp.test(usernameInput)) {
            username.classList.add('valid-ok');
            username.classList.remove('valid-noOk');
            commentUsername.innerHTML = 'Correct username';
            commentUsername.style.color = 'green';
        } else {
            username.classList.add('valid-noOk');
            username.classList.remove('valid-ok');
            commentUsername.innerHTML = 'Incorrect username';
            commentUsername.style.color = 'red';
        }

    }

    // send form

    function checkForm(e) {
        e.preventDefault();


        if (name.classList.contains('valid-ok') && phone.classList.contains('valid-ok') && email.classList.contains('valid-ok') && username.classList.contains('valid-ok')) {

        } else {

        }

    }


    name.addEventListener('blur', checkName);
    email.addEventListener('blur', checkEmail);
    phone.addEventListener('blur', checkPhone);
    username.addEventListener('blur', checkUsername);
    buttonForm.addEventListener('submit', checkForm);





    //----- Message form validation ----------
    function checkMessageEmail() {

        const emailInput = document.querySelector('.email-message-input').value;
        const commentEmail = document.querySelector('.message-comment');
        const emailRegExp = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z_.-]+\.[a-zA-Z]{2,3}$/;

        if (emailRegExp.test(emailInput)) {
            messageEmail.classList.add('valid-ok');
            messageEmail.classList.remove('valid-noOk');
            commentEmail.innerHTML = 'Correct e-mail address';
            commentEmail.style.color = 'green';
        } else {
            messageEmail.classList.add('valid-noOk');
            messageEmail.classList.remove('valid-ok');
            commentEmail.innerHTML = 'incorrect e-mail address';
            commentEmail.style.color = 'red';
        }

    }

    function checkTextarea() {
        const textareaInput = document.querySelector('.form__textarea').value;
        if (textareaInput !== '') {
            textarea.classList.add('valid-ok');
            textarea.classList.remove('valid-noOk');
        } else {
            textarea.classList.remove('valid-ok');
            textarea.classList.add('valid-noOk');

        }

    }

    messageEmail.addEventListener('blur', checkMessageEmail);
    textarea.addEventListener('blur', checkTextarea);


});