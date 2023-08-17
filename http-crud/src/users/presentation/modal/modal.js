import htmlModal from './modal.html?raw';
import './modal.css';

let modal;

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

  element.append(modal);
};