import throttle from 'lodash.throttle';

const selectors = {
    formEl: document.querySelector('.feedback-form'),
}

const DATA_KEY = "feedback-form-state";

let dataObj = {};

selectors.formEl.addEventListener('input', throttle(handlerInput, 500));
selectors.formEl.addEventListener('submit', handlerSubmit)

fillForm()


function handlerInput(event) {
    const inputValue = event.target.value.trim();
    const inputName = event.target.name;

    dataObj[inputName] = inputValue;

    localStorage.setItem(DATA_KEY, JSON.stringify(dataObj));
};


function fillForm() {
    try {
        const savedData = localStorage.getItem(DATA_KEY);
        if (!savedData) return;
        dataObj = JSON.parse(savedData);
        Object.entries(dataObj).forEach(([key, val]) => {
            selectors.formEl.elements[key].value = val;
        });
    } catch ({ message }) {
        console.log(message);
    }
};


function handlerSubmit(e) {
    e.preventDefault();
    console.log('obj',dataObj);
    dataObj = {};
    e.target.reset();
    localStorage.removeItem(DATA_KEY);
};
