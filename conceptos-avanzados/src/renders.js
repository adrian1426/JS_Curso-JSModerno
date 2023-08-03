import heroes from './data/heroes.json';

export const envitonmentsComponent = (element) => {
  const envs = import.meta.env;

  const html = `
    BASE_URL: ${envs.VITE_BASE_URL} <br/>
    DEV: ${envs.DEV} <br/>
    PROD: ${envs.PROD} <br/>
  `;

  element.innerHTML = html;
};


export const callbackComponent = (element) => {
  findHero("5d86371f2343e37870b91ef1", (error, heroe) => {

    if (error) {
      element.innerHTML = error;
      return;
    }

    element.innerHTML = heroe.name;
  });
};

const findHero = (id, callback) => {
  const heroe = heroes.find(hero => hero.id === id);

  if (!heroe) {
    callback(`No se encontró el heroe con el id: ${id}`);
    return;
  }

  callback(null, heroe);
};


const findHeroPromises = (id) => {
  return new Promise((resolve, reject) => {
    const heroe = heroes.find(hero => hero.id === id);

    if (!heroe) {
      reject(`No se encontró el heroe con el id: ${id}`);
      return;
    }

    resolve(heroe);
  });
};