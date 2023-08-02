export const envitonmentsComponent = (element) => {
  const envs = import.meta.env;

  const html = `
    BASE_URL: ${envs.VITE_BASE_URL} <br/>
    DEV: ${envs.DEV} <br/>
    PROD: ${envs.PROD} <br/>
  `;

  element.innerHTML = html;
};