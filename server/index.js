import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 9090;

app.use(cors());
app.use(express.json());

app.get('/send', (req, res) => {
  res.status(200).send(`Сервер запусщен на порту: ${PORT}`);
});

app.post('/send', (req, res) => {
  const success = Math.random() < 0.5;
  if (success) res.status(200).json({ message: 'Данные успешно отправлены!' });
  else res.status(400).json({ message: 'Ошибка отправки данных. Попробуйте еще раз.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
