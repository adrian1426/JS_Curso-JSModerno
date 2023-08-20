const heroes = [
  { id: 1, name: 'Batman' },
  { id: 2, name: 'SuperMan' },
  { id: 3, name: 'SpiderMan' }
];

const index = 0;

const newHeroes = heroes.with(index, { ...heroes.at(index), name: 'Cholito' });

console.log(newHeroes)