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



export const promesaComponents = (element) => {
  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  }

  findHeroPromises("5d86371f2343e37870b91ef1")
    .then(renderHero)
    .catch(error => console.log(error));
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

//Promise.All regresa todas las respuestas como un array
//Primise.race regresa una sola respuesta, el que responde más rapido


const findHeroAsync = async (id) => {
  const heroe = heroes.find(hero => hero.id === id);

  if (!heroe) {
    throw `No se encontró heroe: ${id}`;
  }

  return heroe;
};

export const asyncComponents = async (element) => {
  const id1 = "5d86371f2343e37870b91ef1";

  try {
    const heroe = await findHeroAsync(id1);
    element.innerHTML = heroe.name;
  } catch (error) {
    element.innerHTML = error;
  }
};


export const functionGeneratorComponent = (element) => {

  const valueFGenerator = myFisrtFunction();
  const val1 = valueFGenerator.next();
  const val2 = valueFGenerator.next();

  element.innerHTML = val1.value;
};

function* myFisrtFunction() {
  yield 'primer valor';
  yield 'segundo valor';
  yield 'tercer valor';

  return 'el return valor';
}