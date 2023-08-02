import appHtml from './app.html?raw';
import store, { filtersValue } from '../store/todoStore';
import { renderTodos } from './renderTodos';

export const App = (elementId) => {

  const displayTodos = () => {
    const todos = store.getTodos(store.getCurrentFilter());
    renderTodos("#todo-list", todos);
  }

  (
    () => {
      const elementDiv = document.createElement('div');
      elementDiv.innerHTML = appHtml;

      document.querySelector(elementId).append(elementDiv);
      displayTodos();
    }
  )();

  const descriptioTodo = document.querySelector('#new-todo-input');

  descriptioTodo.addEventListener('keyup', (e) => {
    if (e.keyCode !== 13) return;
    if (e.target.value.trim().length === 0) return;

    store.addTodo(e.target.value);
    displayTodos();
    descriptioTodo.value = '';
  });

  const divCheckList = document.querySelector('#todo-list');

  divCheckList.addEventListener('click', (e) => {
    const elementWithId = e.target.closest('[data-id]');
    store.toggleTodo(elementWithId.getAttribute('data-id'));
    displayTodos();
  });

  divCheckList.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') === 'delete') {
      const elementWithId = e.target.closest('[data-id]');
      store.deleteTodo(elementWithId.getAttribute('data-id'));
      displayTodos();
    }
  });

  const deleteCompleted = document.querySelector('.clear-completed');

  deleteCompleted.addEventListener('click', (e) => {
    store.deleteTodoCompleted();
    displayTodos();
  });

  const filterAll = document.querySelector('#filter-all');
  const filterPending = document.querySelector('#filter-pending');
  const filterCompleted = document.querySelector('#filter-completed');

  filterAll.addEventListener('click', (e) => {
    filterAll.classList.add('selected');
    filterPending.classList.remove('selected');
    filterCompleted.classList.remove('selected');

    store.setfilterTodos(filtersValue.All);
    displayTodos();
  });

  filterPending.addEventListener('click', (e) => {
    filterAll.classList.remove('selected');
    filterPending.classList.add('selected');
    filterCompleted.classList.remove('selected');

    store.setfilterTodos(filtersValue.Pending);
    displayTodos();
  });

  filterCompleted.addEventListener('click', (e) => {
    filterAll.classList.remove('selected');
    filterPending.classList.remove('selected');
    filterCompleted.classList.add('selected');

    store.setfilterTodos(filtersValue.Completed);
    displayTodos();
  });
};