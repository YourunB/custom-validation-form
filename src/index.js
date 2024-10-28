import '../styles/style.sass'
import { form } from './components/form.js';
import { openFormButton } from './components/openFormButton.js';
import { handleCloseForm, handleOpenForm } from './components/form.js';

export const app = document.createElement('div');
app.classList.add('container');
document.body.append(app)
app.append(openFormButton, form);

app.addEventListener('click', (e) => {
  if (e.target.classList.contains('container')) {
    handleCloseForm()
  }
})

openFormButton.addEventListener('click', (e) => {
  e.stopPropagation();
  handleOpenForm()
})
