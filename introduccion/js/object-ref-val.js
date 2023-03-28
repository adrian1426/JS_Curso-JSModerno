const obj1 = {
  name: 'Raul'
};

const obj2 = { ...obj1 };
obj2.name = 'Kawaki';

console.log({ obj1, obj2 });