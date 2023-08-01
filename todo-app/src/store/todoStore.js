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
};

const toggleTodo = (todoId) => {
  state.todos = state.todos.map(todo => {
    return {
      ...todo,
      done: todo.id === todoId ? !todo.done : todo.done
    };
  });
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter(todo => todo.id !== todoId);
};

const deleteTodoCompleted = () => {
  state.todos = state.todos.filter(todo => !todo.done);
};

const setfilterTodos = (filter = filtersValue.All) => {
  state.filter = filter;
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  initStore,
  loadStore,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteTodoCompleted,
  setfilterTodos,
  getCurrentFilter
}