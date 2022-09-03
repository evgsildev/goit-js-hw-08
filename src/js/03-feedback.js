import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const button = document.querySelector('button');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);

let dataObj = {};

populateData();

function onFormInput(evt) {
  dataObj[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));

  button.removeAttribute('disabled', 'disabled');
}

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.clear();

  dataObj = {};
  button.setAttribute('disabled', 'disabled');
}

function populateData() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (saveMessage) {
    dataObj = saveMessage;

    if (dataObj.email) {
      email.value = dataObj.email;
    }

    if (dataObj.message) {
      message.value = dataObj.message;
    }
  }
}
