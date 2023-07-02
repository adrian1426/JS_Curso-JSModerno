class Persona {
  static _conteo = 0;

  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setComidaFavorita(comida) {
    this.comida = comida;
  }

  get getComidaFavorita() {
    return this.comida;
  }

  quienSoy() {
    console.log(`Mi nombre es ${this.nombre} y me conocen como ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

class Heroe extends Persona {
  clan = '';

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);
  }

  getPersona() {
    return this.nombre;
  }

  getPersona2() {
    return super.quienSoy();
  }
}

const spriterman = new Heroe('spriterman', 'sprider', 'corran todos');
console.log(spriterman.getPersona())
spriterman.getPersona2()