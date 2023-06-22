(
  () => {
    'use strict';

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

    deck = crearDeck();

    let puntosJugador = 0;
    let puntosComputadora = 0;

    const btnDetenerJuego = document.querySelector('#btnDetenerJuego');
    const btnPedirCarta = document.querySelector('#btnPedirCarta');
    const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
    const puntosJugadorHtml = document.querySelectorAll('small')[0];
    const puntosComputadoraHtml = document.querySelectorAll('small')[1];
    const divJugadorCartas = document.querySelector('#jugador-cartas');
    const divComputadoraCartas = document.querySelector('#computadora-cartas');

    const turnoComputadora = (puntosMinimo) => {
      do {
        const carta = pedirCarta();
        const valor = valorCarta(carta);

        puntosComputadora = puntosComputadora + valor;
        puntosComputadoraHtml.innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        divComputadoraCartas.append(imgCarta);

        if (puntosMinimo > 21) {
          break;
        }
      } while ((puntosComputadora < puntosMinimo) && (puntosMinimo <= 21));

      setTimeout(() => {
        if (puntosComputadora === puntosMinimo) {
          alert('Nadie Gana');
        } else if (puntosMinimo > 21) {
          alert('La Computadora Gana');
        } else if (puntosComputadora > 21) {
          alert('El Jugador Gana');
        } else if (puntosMinimo < 21 && puntosComputadora <= 21 && puntosComputadora > puntosMinimo) {
          alert('La Computadora Gana');
        }
        else if (puntosMinimo > 21 && puntosComputadora <= 21 && puntosComputadora > puntosMinimo) {
          alert('El Jugador Gana');
        }
      }, 100);
    };

    btnPedirCarta.addEventListener('click', function () {
      const carta = pedirCarta();
      const valor = valorCarta(carta);

      puntosJugador = puntosJugador + valor;
      puntosJugadorHtml.innerText = puntosJugador;

      //<img class="carta" src="assets/cartas/10C.png" alt="carta" />
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png`;
      imgCarta.classList.add('carta');

      divJugadorCartas.append(imgCarta);

      if (puntosJugador > 21) {
        console.log('Ha perdido el juego');
        btnPedirCarta.disabled = true;
        btnDetenerJuego.disabled = true;
        turnoComputadora(puntosJugador);
      } else if (puntosJugador === 21) {
        console.log('21, ¡Genial!');
        btnPedirCarta.disabled = true;
        btnDetenerJuego.disabled = true;
        turnoComputadora(puntosJugador);
      }
    });

    btnDetenerJuego.addEventListener('click', function () {
      btnPedirCarta.disabled = true;
      btnDetenerJuego.disabled = true;
      turnoComputadora(puntosJugador);
    });

    btnNuevoJuego.addEventListener('click', function () {
      btnPedirCarta.disabled = false;
      btnDetenerJuego.disabled = false;

      deck = [];
      deck = crearDeck();

      puntosJugador = 0;
      puntosComputadora = 0;

      puntosJugadorHtml.innerText = puntosJugador;
      puntosComputadoraHtml.innerText = puntosComputadora;

      divJugadorCartas.innerHTML = '';
      divComputadoraCartas.innerHTML = '';
    });

  }
)();


