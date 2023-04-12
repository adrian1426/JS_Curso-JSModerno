let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'K', 'Q'];

const crearDeck = () => {
  for (let i = 2; i < 10; i++) {
    for (const tipo of tipos) {
      deck.push(`${i}${tipo}`);
    }
  }

  for (const tipo of tipos) {
    for (const especial of especiales) {
      deck.push(`${especial}${tipo}`);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};

const pedirCarta = () => {
  const carta = deck.shift();
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  let puntos = 0;

  if (isNaN(valor)) {
    puntos = valor === 'A' ? 11 : 10;
  } else {
    puntos = Number(valor);
  }

  return puntos;
};


crearDeck();

let puntosJugador = 0;
let puntosComputadora = 0;

const btnPedirCarta = document.querySelector('#btnPedirCarta');
const puntosJugadorHtml = document.querySelectorAll('small')[0];

btnPedirCarta.addEventListener('click', function () {
  const carta = pedirCarta();
  const valor = valorCarta(carta);

  puntosJugador = puntosJugador + valor;
  puntosJugadorHtml.innerText = puntosJugador;
});