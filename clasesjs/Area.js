class Rectangulo {

  static instance;
  #area = 0;

  constructor(base = 0, altura = 0,) {
    if (!!Rectangulo.instance) {
      return Rectangulo.instance;
    }

    Rectangulo.instance = this;

    this.base = base;
    this.altura = altura;
    this.#area = base * altura;
  }
}

const rectangulo = new Rectangulo(10, 12);
const rectangulo2 = new Rectangulo(12, 15);
console.log(rectangulo);
console.log(rectangulo2);