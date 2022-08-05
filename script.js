const password = document.querySelector('#password');
const passwordSecond = document.querySelector('#password_confirm');
const inputPasswords = document.querySelectorAll('input[type=password]');
const createAccount = document.querySelector('button');

createAccount.addEventListener('click', verifyPassword);

function verifyPassword(event){

    if(password.value !== passwordSecond.value){
        event.preventDefault();
        document.querySelector('div.error').style.display='block';
        inputPasswords.forEach((input) => {
            input.value = '';
            input.style.outline = 'none';
        });
    }
}