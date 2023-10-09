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
    // console.log('email', selectors.emailEl.value)
    // console.log('mess', selectors.messageEl.value)
    data = {
        email: selectors.emailEl.value.trim(),
        message: selectors.messageEl.value.trim(),
    }
    // console.log(data);

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

   
        console.log(dataObj);
    
    
    // localStorage.removeItem(DATA_KEY);
}













//    <form class="feedback-form" autocomplete="off">
//       <label>
//         Email
//         <input type="email" name="email" autofocus />
//       </label>
//       <label>
//         Message
//         <textarea name="message" rows="8"></textarea>
//       </label>
//       <button type="submit">Submit</button>
//     </form>










// const formEl = document.querySelector(".feedback-form")
// // console.dir(formEl)
// const inputEl = document.querySelector('input[type="email"][name="email"]')
// // console.log(inputEl)
// const messageEl = document.querySelector('textarea[name="message"]')
// // console.log(messageEl)
// // const buttonEl = document.querySelector('button[type="submit"]')
// // console.log(buttonEl)

// const FORM_KEY = "feedback-form-state"

// formEl.addEventListener('input', throttle(saveForm, 500));
// formEl.addEventListener('submit', handlerSubmit);

// function saveForm() {
//     const data = {
//         email: inputEl.value,
//         message: messageEl.value,
//     };

//     localStorage.setItem(FORM_KEY, JSON.stringify(data))
// }

// function fillForm() {
//     const savedData = JSON.parse(localStorage.getItem(FORM_KEY));

//     if (savedData) {
//         inputEl.value = savedData.email;
//         messageEl.value = savedData.message;
//     }
// }

// fillForm()

// function handlerSubmit(event) {
//     event.preventDefault();

//     console.log({
//         email: inputEl.value,
//         message: messageEl.value,
//     });

//     localStorage.removeItem(FORM_KEY);
    
//     inputEl.value = "";
//     messageEl.value = "";
// }

