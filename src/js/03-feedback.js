import throttle from 'lodash.throttle';

const selectors = {
    formEl: document.querySelector('.feedback-form'),
    emailEl: document.querySelector('input[type="email"][name="email"]'),
    messageEl: document.querySelector('textarea[name="message"]'),
    btnEl: document.querySelector('button[type="submit"]'),
}

const DATA_KEY = "feedback-form-state";

let dataObj = {};

selectors.formEl.addEventListener('input', throttle(handlerInput, 500));
selectors.formEl.addEventListener('submit', handlerSubmit)

fillForm()


function handlerInput() {
     const data = {
        email: selectors.emailEl.value.trim(),
        message: selectors.messageEl.value.trim(),
    }

    localStorage.setItem(DATA_KEY, JSON.stringify(data));
};


function fillForm() {
    const savedData = localStorage.getItem(DATA_KEY);
    dataObj = JSON.parse(localStorage.getItem(DATA_KEY)) ?? {};
    

    if (!savedData) { 
        return
    } else{
    selectors.emailEl.value = dataObj.email;
    selectors.messageEl.value = dataObj.message;
    }; 
};


function handlerSubmit(e) {
    e.preventDefault();

    if (selectors.emailEl.value === '' || selectors.messageEl.value === '') {
        alert('Please fill in all fields of the form')
    } else {
    dataObj = JSON.parse(localStorage.getItem(DATA_KEY)) ?? {};
    console.log('obj',dataObj);
    
    
    selectors.emailEl.value = '';
    selectors.messageEl.value = '';
    
    
    localStorage.removeItem(DATA_KEY);
    };
};
