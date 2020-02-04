const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const showError = (input, message) => {
    //show input error message
    //get the appropriate form control div
    const formControl = input.parentElement; 
    formControl.className ='form-control error';
    formControl.querySelector('span').textContent = message;
}

const showSuccess = input => {
    const formControl = input.parentElement; 
    formControl.className ='form-control success';
}

const checkEmail = input => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(input.value.trim()).toLowerCase())){
        showError(input, 'Email is not valid')
    }else {
        showSuccess(input)
    }
}

const getFieldName = input => input.id.charAt(0).toUpperCase() + input.id.slice(1);

const checkRequired = inputArray =>{
    inputArray.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    });
}

const checkLength = (input, min, max) => {
    if(input.value.length < min ){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be at most ${max} characters`)
    }else{
        showSuccess(input)
    }
}

const checkPasswordsMatch = (password, confirmPassword) => {
    if(password.value !== confirmPassword.value){
        showError(confirmPassword, `Passwords do not match`)
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    checkRequired([username, email, password, confirmPassword])
    checkLength(username, 3, 15);
    checkEmail(email)
    checkLength(password, 6, 25)
    checkLength(confirmPassword, 6, 25)
    checkPasswordsMatch(password, confirmPassword)
})
