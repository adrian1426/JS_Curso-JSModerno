import userStore from "../../store/userStore";
import { renderTable } from "../table/table";
import './buttons.css';

/**
 * Description
 * @param {HTMLDivElement} element
 * @returns {any}
 */
export const renderButton = (element) => {
  const nextButton = document.createElement('button');
  const prevButton = document.createElement('button');
  const currentPageSpan = document.createElement('span');

  nextButton.innerText = 'Next >';
  prevButton.innerText = '< Prev';

  currentPageSpan.id = 'current-page';
  currentPageSpan.innerText = userStore.getCurrentPage();

  element.append(prevButton, currentPageSpan, nextButton);

  nextButton.addEventListener('click', async () => {
    await userStore.loadNextPage();

    currentPageSpan.innerText = userStore.getCurrentPage();
    renderTable(element);
  });

  prevButton.addEventListener('click', async () => {
    await userStore.loadPreviousPage();

    currentPageSpan.innerText = userStore.getCurrentPage();
    renderTable(element);
  });
};