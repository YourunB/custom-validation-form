import { validateForm } from '../utils/formValidation.js';
import { submitForm } from '../utils/formSubmit.js';
import { openModal } from '../components/modal.js';
import { openFormButton } from './openFormButton.js';

export const form = document.createElement('form');
form.className = 'form form_hide';

export const handleCloseForm = () => {
  form.classList.add('form_hide');
  openFormButton.classList.remove('btn-open_hide');
}

export const handleOpenForm = () => {
  form.classList.remove('form_hide')
  openFormButton.classList.add('btn-open_hide')
}

const formTitle = document.createElement('h3');
formTitle.textContent = 'Тестовая форма';

const inputName = document.createElement('input');
inputName.className = 'form__input';
inputName.type = 'text';
inputName.name = 'name';
inputName.placeholder = 'Введите имя';
inputName.required = true;

const inputMail = document.createElement('input');
inputMail.className = 'form__input';
inputMail.type = 'email';
inputMail.name = 'email';
inputMail.placeholder = 'Введите e-mail';
inputMail.required = true;

const inputPhone = document.createElement('input');
inputPhone.className = 'form__input';
inputPhone.type = 'text';
inputPhone.name = 'phone';
inputPhone.placeholder = 'Введите телефон';
inputPhone.required = true;

const areaMsg = document.createElement('textarea');
areaMsg.className = 'form__msg';
areaMsg.name = 'message';
areaMsg.placeholder = 'Введите пожелания';
areaMsg.required = true;

const btnSubmit = document.createElement('button');
btnSubmit.textContent = 'Отправить';

btnSubmit.addEventListener('click', async (event) => {
  event.preventDefault();
  const isValid = validateForm(form);

  if (isValid) {
    const result = await submitForm(form);

    if (result.msg) {
      openModal(result.msg);
      handleCloseForm();
      form.reset();
    }

    if (result.fields) {
      for (const [fieldName, errorMessage] of Object.entries(result.fields)) {
        const field = form.querySelector(`[name="${fieldName}"]`);
        if (field) {
          field.classList.add('input-error');
          showError(field, errorMessage);
        }
      }
    }
  }
});

form.append(formTitle, inputName, inputMail, inputPhone, areaMsg, btnSubmit);
document.body.appendChild(form);

const showError = (field, message) => {
  const error = document.createElement('div');
  error.className = 'error-message';
  error.textContent = message;
  field.parentNode.insertBefore(error, field);
};
