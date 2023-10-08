import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form")
// console.dir(formEl)
const inputEl = document.querySelector('input[type="email"][name="email"]')
// console.log(inputEl)
const messageEl = document.querySelector('textarea[name="message"]')
// console.log(messageEl)
const buttonEl = document.querySelector('button[type="submit"]')
// console.log(buttonEl)

const FORM_KEY = "feedback-form-state"

formEl.addEventListener('input', throttle(saveForm, 500));
formEl.addEventListener('submit', handlerSubmit);

function saveForm() {
    const data = {
        email: inputEl.value,
        message: messageEl.value,
    };

    localStorage.setItem(FORM_KEY, JSON.stringify(data))
}

function fillForm() {
    const savedData = JSON.parse(localStorage.getItem(FORM_KEY));

    if (savedData) {
        inputEl.value = savedData.email;
        messageEl.value = savedData.message;
    }
}

fillForm()

function handlerSubmit(event) {
    event.preventDefault();

    console.log({
        email: inputEl.value,
        message: messageEl.value,
    });

    localStorage.removeItem(FORM_KEY);
    
    inputEl.value = "";
    messageEl.value = "";
}

