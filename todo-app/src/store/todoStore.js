import { TodoModel } from "../todos/models/todoModel";

const filtersValue = {
  All: 'ALL',
  Completed: 'COMPLETED',
  Pending: 'PENDING'
};

let state = {
  todos: [],
  filter: filtersValue.All
};

const initStore = () => {
  loadStore();
};

const loadStore = () => {
  if (localStorage.getItem('todos')) {
    state = JSON.parse(localStorage.getItem('todos'));
  }
};

const saveStateToLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(state));
};

const getTodos = (filter = filtersValue.All) => {
  switch (filter) {
    case filtersValue.All:
      return state.todos;
    case filtersValue.Pending:
      return state.todos.filter(t => !t.done);
    case filtersValue.Completed:
      return state.todos.filter(t => t.done);
    default:
      return state.todos;
  }
};

const addTodo = (description) => {
  if (!description) {
    throw new Error('Description debe tener un valor');
  }

  state.todos.push(new TodoModel(description));

  saveStateToLocalStorage();
};

const toggleTodo = (todoId) => {
  state.todos = state.todos.map(todo => {
    return {
      ...todo,
      done: todo.id === todoId ? !todo.done : todo.done
    };
  });

  saveStateToLocalStorage();
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter(todo => todo.id !== todoId);

  saveStateToLocalStorage();
};

const deleteTodoCompleted = () => {
  state.todos = state.todos.filter(todo => !todo.done);

  saveStateToLocalStorage();
};

const setfilterTodos = (filter = filtersValue.All) => {
  state.filter = filter;

  saveStateToLocalStorage();
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  initStore,
  loadStore,
  saveStateToLocalStorage,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteTodoCompleted,
  setfilterTodos,
  getCurrentFilter
}