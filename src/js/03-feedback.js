import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', onFormInput);

form.addEventListener('submit', onFormSubmit);

populateData();

function onFormSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  const dataObj = {
    email: email.value,
    message: message.value,
  };
  console.log(dataObj);

  evt.currentTarget.reset();
  localStorage.clear();
}

function onFormInput(evt) {
  const {
    elements: { email, message },
  } = evt.currentTarget;

  const dataObj = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));
}

function populateData() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);

  if (saveMessage) {
    const values = JSON.parse(saveMessage);

    email.value = values.email;
    message.value = values.message;
  }
}
