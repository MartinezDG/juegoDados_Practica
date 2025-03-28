import { Dado } from './Dado.js';
import { Jugador } from './Jugador.js';
import { Jugada } from './Jugada.js';
export class JuegoDados {
    cantidadJugadas;
    jugador1;
    jugador2;
    marcadorJugador1;
    marcadorJugador2;
    dado1;
    dado2;
    vencedor;
    bandJugador; // true = Jugador1, false = Jugador2
    constructor(nombreJugador1, nombreJugador2) {
        this.jugador1 = new Jugador();
        this.jugador1.nombre = nombreJugador1;
        this.jugador2 = new Jugador();
        this.jugador2.nombre = nombreJugador2;
    }
    elegirPrimerLanzador() {
        this.bandJugador = Math.random() < 0.5;
    }
    iniciarJugada() {
        const jugadaActual = new Jugada();
        if (this.bandJugador) {
            jugadaActual.iniciarJugada(this.jugador1, this.jugador2, this.dado1, this.dado2);
        }
        else {
            jugadaActual.iniciarJugada(this.jugador2, this.jugador1, this.dado1, this.dado2);
        }
        this.marcadorJugador1 += this.jugador1.puntoGanado;
        this.marcadorJugador2 += this.jugador2.puntoGanado;
        // Actualizar el HTML con el puntaje actual después de cada jugada
        this.mostrarPuntajesEnHTML();
    }
    mostrarPuntajesEnHTML() {
        // Actualizar el contenedor en HTML con el número de jugada y los puntajes
        const resultadosDiv = document.getElementById('resultadoJugadas');
        if (resultadosDiv) {
            resultadosDiv.innerHTML += `Jugada: ${this.cantidadJugadas} - Jugador 1: ${this.marcadorJugador1} - Jugador 2: ${this.marcadorJugador2}<br>`;
        }
    }
    iniciarJuego() {
        // Crear dados, inicializar variables
        this.dado1 = new Dado();
        this.dado2 = new Dado();
        this.cantidadJugadas = 0;
        this.marcadorJugador1 = 0;
        this.marcadorJugador2 = 0;
        this.elegirPrimerLanzador();
        // Limpiar resultados previos en el HTML
        const resultadosDiv = document.getElementById('resultadoJugadas');
        if (resultadosDiv) {
            resultadosDiv.innerHTML = '';
        }
        // Ciclo infinito de juego
        do {
            this.iniciarJugada();
            this.cantidadJugadas++;
        } while (this.marcadorJugador1 !== 5 && this.marcadorJugador2 !== 5);
        // Determina ganador
        this.vencedor = this.determinarVencedor();
        this.mostrarVencedor();
    }
    determinarVencedor() {
        // Caso empate
        if (this.marcadorJugador1 === 5 && this.marcadorJugador2 === 5)
            return null;
        // Ganó el jugador 1
        if (this.marcadorJugador1 === 5)
            return this.jugador1;
        // Ganó el jugador 2
        if (this.marcadorJugador2 === 5)
            return this.jugador2;
        return null;
    }
    mostrarVencedor() {
        const resultadoFinalDiv = document.getElementById('resultado');
        if (resultadoFinalDiv) {
            if (this.vencedor === null) {
                resultadoFinalDiv.textContent = 'El juego terminó en empate';
            }
            else {
                resultadoFinalDiv.textContent = `El vencedor es: ${this.vencedor.nombre}`;
            }
        }
    }
}
