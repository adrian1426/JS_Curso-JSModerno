import appHtml from './app.html?raw';

export const App = (elementId) => {
  (
    () => {
      const elementDiv = document.createElement('div');
      elementDiv.innerHTML = appHtml;

      document.querySelector(elementId).append(elementDiv);
    }
  )();
};