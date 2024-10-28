import '../styles/style.sass'
import { form } from './ui/form.js';

export const app = document.createElement('div');
app.classList.add('container');
document.body.append(app)
app.append(form);

setTimeout(() => form.classList.remove('form_hide'), 500);