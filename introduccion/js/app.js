// const fruits = ['Manzana', 'Pera', 'Ciruela', 'Banana', 'Uva'];

// const [manzana, miPera] = fruits;
// console.log(`fruta: ${manzana} y ${miPera}`);

// const { 2: fruta3, 0: fruta1 } = fruits;
// console.log(`fruta: ${fruta3} y ${fruta1}`);


const miObjeto = {
  name: 'Kawaki',
  age: 23,
  lastName: 'Uzumaki',
  gender: 'male'
};

const entries = Object.entries(miObjeto);
console.log(entries);


const fun = function () {
  console.log('ahajaj')
}