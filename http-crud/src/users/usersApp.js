import { renderTable } from './presentation/table/table';
import userStore from './store/userStore';

/**
 * 
 * @param {HTMLDivElement} element
*/
export const usersApp = async (element) => {
  element.innerHTML = 'Loading...';

  await userStore.loadNextPage();

  element.innerHTML = '';

  renderTable(element);
};