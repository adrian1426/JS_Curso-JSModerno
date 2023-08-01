import { TodoModel } from "../todos/models/todoModel";

const filtersValue = {
  All: 'ALL',
  Completed: 'COMPLETED',
  Pending: 'PENDING'
};

const state = {
  todos: [
    new TodoModel('Leer clean code book'),
    new TodoModel('Salir a correr 30 minutos')
  ],
  filter: filtersValue.All
};

const initStore = () => {
  console.log(state);
  console.log('init store inicializado');
};

const loadStore = () => {
  throw new Error('loadStore No implementado');
};

const addTodo = (description) => { };

const toggleTodo = (todoId) => { };

const deleteTodo = (todoId) => { };

const deleteTodoCompleted = () => { };

const setfilterTodos = (filter = filtersValue.All) => { };

const getCurrentFilter = () => { };

export default {
  initStore,
  loadStore,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteTodoCompleted,
  setfilterTodos,
  getCurrentFilter
}