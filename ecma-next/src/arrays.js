const heroes = [
  { id: 1, name: 'Batman' },
  { id: 2, name: 'SuperMan' },
  { id: 3, name: 'SpiderMan' }
];

//structuredClone hace una copia para evitar problemas de objetos por referencia
//Antes const heroesCopy = JSON.parse(JSON.stringify(heroes));
const heroesCopy = structuredClone(heroes);

heroesCopy[0].name = 'Adrian';

console.log(heroes);
console.log(heroesCopy);