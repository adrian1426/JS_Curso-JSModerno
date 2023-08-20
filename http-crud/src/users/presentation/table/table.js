import userStore from '../../store/userStore';
import { deleteUser } from '../../use-cases/deleteUserById';
import { showModal } from '../modal/modal';
import './table.css';

let tableElement;

const createTableElement = () => {
  const table = document.createElement('table');
  const tableHeader = document.createElement('thead');
  const tableBody = document.createElement('tbody');

  tableHeader.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Balance</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `;

  table.append(tableHeader, tableBody);

  return table;
};

const userSelectedListener = async (event) => {
  const className = event.target.classList.value;
  let id;

  if (className.includes('select-user')) {
    id = event.target.getAttribute('data-id');
    showModal(id);
  }

  if (className.includes('delete-user')) {
    id = event.target.getAttribute('data-id');
    await deleteUser(id);
    await userStore.reloadPage();
    renderTable();
  }
};

/**
 * renderTable
 * @param {HTMLDivElement} element
 * @returns {any}
 */
export const renderTable = (element) => {
  const users = userStore.getUsers();

  if (!tableElement) {
    tableElement = createTableElement();
    element.append(tableElement);

    tableElement.addEventListener('click', userSelectedListener);
  }

  let tableBody = '';

  users.forEach(user => {
    tableBody += `
      <tr>
        <td>${user.id}</td>
        <td>${user.balance}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.isActive}</td>
        <td>
          <a href="#/" class="select-user" data-id="${user.id}">Select</a>
          |
          <a href="#/" class="delete-user" data-id="${user.id}">Delete</a>
        </td>
      </tr>
    `;
  });

  tableElement.querySelector('tbody').innerHTML = tableBody;
};