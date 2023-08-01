import { htmlTodos } from "./htmlTodos";

export const renderTodos = (elementId, todos = []) => {
  const element = document.querySelector(elementId);

  todos.forEach(todo => {
    element.append(htmlTodos(todo));
  });
};