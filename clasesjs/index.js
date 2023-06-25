class Persona {

  nombre = '';
  codigo = '';
  frase = '';

  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}

const juan = new Persona('Juan', 'HEHA', 'Piensa rápidp');
console.log(juan)