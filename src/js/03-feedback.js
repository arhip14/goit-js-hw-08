import throttle from 'lodash.throttle';

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
  const userEmail = refs.emailInput.value;
  const userMessage = refs.messageInput.value;

  if (userEmail.trim() === '' || userMessage.trim() === '') {
    return false;
  }

  const formData = {
    email: userEmail,
    message: userMessage,
  };

  console.log(formData);

  refs.form.reset();
  localStorage.removeItem('feedback-form-state');
}
