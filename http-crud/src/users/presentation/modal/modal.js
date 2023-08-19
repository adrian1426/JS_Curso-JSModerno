import htmlModal from './modal.html?raw';
import './modal.css';

let modal, form;

export const showModal = () => {
  modal.classList.remove('hide-modal');
};

export const hideModal = () => {
  modal.classList.add('hide-modal');
  form?.reset();
};

/**
 * Description
 * @param {HTMLDivElement} element
 * @returns {any}
 */
export const renderModal = (element, saveUserCallback) => {
  if (modal) return;

  modal = document.createElement('div');
  modal.innerHTML = htmlModal;
  modal.className = 'modal-container hide-modal';

  form = modal.querySelector('form');

  element.append(modal);

  modal.addEventListener('click', (event) => {
    if (event.target.className === 'modal-container') {
      hideModal();
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const userData = {};

    for (const [key, value] of formData) {
      userData[key] = value;

      if (key === 'balance') {
        userData[key] = Number(value);
      }

      if (key === 'isActive') {
        userData[key] = value === 'on';
      }
    }

    await saveUserCallback(userData);

    hideModal();
  });
};