import appHtml from './app.html?raw';
import store from '../store/todoStore';
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
};