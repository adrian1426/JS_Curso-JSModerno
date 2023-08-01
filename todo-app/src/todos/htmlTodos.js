export const htmlTodos = (todo) => {
  const html = `<h>${todo.description}</h>`;

  const liElement = document.createElement('li');
  liElement.innerHTML = html;

  return liElement;
};