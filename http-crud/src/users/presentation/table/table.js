import userStore from '../../store/userStore';
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
          <a href="#/" data-id="${user.id}">Select</a>
          |
          <a href="#/" data-id="${user.id}">Delete</a>
        </td>
      </tr>
    `;
  });

  tableElement.querySelector('tbody').innerHTML = tableBody;
};