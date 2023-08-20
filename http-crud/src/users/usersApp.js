import { renderAddButton } from './presentation/buttons/addButton';
import { renderButton } from './presentation/buttons/buttons';
import { renderModal } from './presentation/modal/modal';
import { renderTable } from './presentation/table/table';
import userStore from './store/userStore';
import { saveUser } from './use-cases/saveUsers';
import { updateUser } from './use-cases/updateUser';

/**
 * 
 * @param {HTMLDivElement} element
*/
export const usersApp = async (element) => {
  element.innerHTML = 'Loading...';

  await userStore.loadNextPage();

  element.innerHTML = '';

  renderTable(element);
  renderButton(element);
  renderAddButton(element);
  renderModal(element, async (data) => {
    const user = !data.id ? await saveUser(data) : await updateUser(data);

    userStore.onUserChanged(user);
    renderTable(element);
  });
};