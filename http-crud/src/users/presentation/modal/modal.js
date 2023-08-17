import htmlModal from './modal.html?raw';
import './modal.css';

let modal, form;

export const showModal = () => {
  modal.classList.remove('hide-modal');
};

export const hideModal = () => {
  modal.classList.add('hide-modal');
};

/**
 * Description
 * @param {HTMLDivElement} element
 * @returns {any}
 */
export const renderModal = (element) => {
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

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
};