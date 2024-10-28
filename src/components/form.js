import { validateForm } from '../utils/formValidation.js';

export const form = document.createElement('form');
form.className = 'form form_hide';

const formTitle = document.createElement('h3');
formTitle.textContent = 'Тестовая форма';

const inputName = document.createElement('input');
inputName.className = 'form__input';
inputName.type = 'text';
inputName.placeholder = 'Введите имя';
inputName.required = true;

const inputMail = document.createElement('input');
inputMail.className = 'form__input';
inputMail.type = 'mail';
inputMail.placeholder = 'Введите e-mail';
inputMail.required = true;

const inputPhone = document.createElement('input');
inputPhone.className = 'form__input';
inputPhone.type = 'text';
inputPhone.placeholder = 'Введите телефон';
inputPhone.required = true;

const areaMsg = document.createElement('textarea');
areaMsg.className = 'form__msg';
areaMsg.placeholder = 'Введите пожелания';
areaMsg.required = true;

const btnSubmit = document.createElement('button');
btnSubmit.textContent = 'Отправить';

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const isValid = validateForm(form);
  if (isValid) {
    alert('Форма успешно отправлена!');
    form.reset();
  }
});

form.append(formTitle, inputName, inputMail, inputPhone, areaMsg, btnSubmit);
