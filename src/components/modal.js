
export const modal = document.createElement('div');
modal.className = 'modal';

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';

const modalMessage = document.createElement('div');
modalMessage.id = 'modal-message';

modalContent.append(modalMessage);
modal.append(modalContent);
document.body.append(modal);

window.onclick = (e) => {
  if (e.target === modal) {
    document.body.style.overflow = '';
    modal.classList.remove('modal_open');
  }
};

export const openModal = (message) => {
  const modal = document.querySelector('.modal');
  modal.classList.add('modal_open')
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
  document.body.style.overflow = 'hidden';
};
