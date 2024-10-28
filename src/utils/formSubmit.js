export const submitForm = async (form) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:9090/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return { msg: result.message };
    } else {
      return { msg: result.message };
    }
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    return { msg: 'Произошла ошибка, попробуйте еще раз.' };
  }
};
