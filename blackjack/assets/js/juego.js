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

crearDeck();
console.log("carta: ", pedirCarta());