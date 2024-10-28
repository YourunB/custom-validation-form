export const form = document.createElement('form');
form.className = 'form form_hide';

const formTitle = document.createElement('h3');
formTitle.textContent = 'Тестовая форма';

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.minLength = 3;
inputName.placeholder = 'Введите имя';
inputName.required = true;

const inputMail = document.createElement('input');
inputMail.type = 'mail';
inputMail.placeholder = 'Введите e-mail';
inputMail.required = true;

const inputPhone = document.createElement('input');
inputPhone.type = 'text';
inputPhone.placeholder = 'Введите телефон';
inputPhone.required = true;

const areaMsg = document.createElement('textarea');
areaMsg.placeholder = 'Введите пожелания';

const btnSubmit = document.createElement('button');
btnSubmit.textContent = 'Отправить'

form.append(formTitle, inputName, inputMail, inputPhone, areaMsg, btnSubmit)