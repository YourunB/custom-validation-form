export const validateForm = (form) => {
  let isValid = true;
  
  const errorElements = form.querySelectorAll('.error-message');
  errorElements.forEach((el) => el.remove());

  const requiredFields = form.querySelectorAll('input[required], textarea[required]');
  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('input-error');
      showError(field, 'Это поле обязательно для заполнения');
    } else {
      field.classList.remove('input-error');
    }
  });

  const nameField = form.querySelector('input[type="text"][placeholder="Введите имя"]');
  if (nameField && nameField.value) {
    const namePattern = /^[A-ZА-ЯЁ][a-zа-яё]{2,}$/;
    if (!namePattern.test(nameField.value)) {
      isValid = false;
      nameField.classList.add('input-error');
      showError(nameField, 'Имя должно начинаться с заглавной буквы и иметь минимум 3 буквы');
    } else {
      nameField.classList.remove('input-error');
    }
  }

  const emailField = form.querySelector('input[type="mail"]');
  if (emailField && emailField.value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
      isValid = false;
      emailField.classList.add('input-error');
      showError(emailField, 'Введите корректный адрес электронной почты');
    } else {
      emailField.classList.remove('input-error');
    }
  }

  const phoneField = form.querySelector('input[type="text"][placeholder="Введите телефон"]');
  if (phoneField && phoneField.value) {
    const phonePattern = /^\+375(29|25|44|33|17|50|51|52|53|54|55|56|57|58|59|60|61|62|63|64|65|66|67|68|69|70|71|72|73|74|75|76|77|78|79|80|81|82|83|84|85|86|87|88|89|90|91|92|93|94|95|96|97|98|99)\d{7}$|^\+7(9[0-9]{9})$/;
    if (!phonePattern.test(phoneField.value)) {
      isValid = false;
      phoneField.classList.add('input-error');
      showError(phoneField, 'Введите корректный номер телефона (например, +375298999111)');
    } else {
      phoneField.classList.remove('input-error');
    }
  }

  return isValid;
};

const showError = (field, message) => {
  const error = document.createElement('div');
  error.className = 'error-message';
  error.textContent = message;
  field.parentNode.insertBefore(error, field.nextSibling);
};



