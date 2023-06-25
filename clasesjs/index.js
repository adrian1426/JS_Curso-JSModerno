class Persona {

  nombre = '';
  codigo = '';
  frase = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  quienSoy() {
    console.log(`Mi nombre es ${this.nombre} y me conocen como ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const juan = new Persona('Juan', 'HEHA', 'Piensa rápidp');
juan.quienSoy();
juan.miFrase();