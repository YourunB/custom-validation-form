import '../styles/style.sass'
import { form } from './components/form.js';
import { openFormButton } from './components/openFormButton.js';

export const app = document.createElement('div');
app.classList.add('container');
document.body.append(app)
app.append(openFormButton, form);

app.addEventListener('click', (e) => {
  if (e.target.classList.contains('container')) {
    form.classList.add('form_hide')
    openFormButton.classList.remove('btn-open_hide')
  }
})

openFormButton.addEventListener('click', (e) => {
  e.stopPropagation();
  form.classList.remove('form_hide')
  openFormButton.classList.add('btn-open_hide')
})
