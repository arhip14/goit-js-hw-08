// import throttle from 'lodash.throttle';

// const FEEDBACK_FORM_KEY = 'feedback-form-state';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form  textarea'),
//   email: document.querySelector('.feedback-form input[name="email"]'),
// };

// const formData = {};

// refs.form.addEventListener('input', throttle(addInputDataToLocalStorage, 500));
// refs.form.addEventListener('submit', onFormSubmit);

// onTextAreaInput();

// function addInputDataToLocalStorage(e) {
//   formData[e.target.name] = e.target.value;

//   localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
// }

// function onTextAreaInput() {
//   //   console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)));

//   const localStorageData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));

//   if (localStorageData.message) {
//     refs.textarea.value = localStorageData.message;
//   }

//   if (localStorageData.email) {
//     refs.email.value = locaalStorageData.email;
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   const userEmail = e.target.email.value;
//   const userMessage = e.target.message.value;

//   if (userEmail === '' || userMessage === '') {
//     return false;
//   }

//   e.target.reset();
//   const localStorageData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));

//   if (localStorageData) {
//     console.log(localStorageData);
//   }

//   localStorage.removeItem(FEEDBACK_FORM_KEY);
// }   

// import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));

window.addEventListener('load', populateFormFields);

refs.form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const formData = {
    email: refs.emailInput.value,
    message: refs.messageInput.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateFormFields() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    refs.emailInput.value = email;
    refs.messageInput.value = message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = {
    email: refs.emailInput.value,
    message: refs.messageInput.value,
  };

  console.log(formData);

  refs.form.reset();
  localStorage.removeItem('feedback-form-state');
}
