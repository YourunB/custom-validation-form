export const submitForm = async (form) => {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://api-endpoint.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.status === 'error') {
      return result.fields;
    } else if (result.status === 'success') {
      return { msg: result.msg };
    }
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
    return { msg: 'Произошла ошибка, попробуйте еще раз.' };
  }
};
