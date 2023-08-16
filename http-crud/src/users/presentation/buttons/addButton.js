import './addButton.css';

/**
 * Description
 * @param {HTMLDivElement} element
 * @returns {any}
 */
export const renderAddButton = (element) => {
  const fabButton = document.createElement('button');

  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');

  element.append(fabButton);

  fabButton.addEventListener('click', () => {
    console.log('click fab boton')
  });
};