import { JuegoDados } from './JuegoDados.js';
export class Principal {
    static main(args) {
        if (args.length !== 2) {
            console.log("Debes enviar 2 nombres para los jugadores");
            return; // Salir de la función main
        }
        console.log("Primer Jugador: " + args[0]);
        console.log("Segundo Jugador: " + args[1]);
        // Leer nombres de jugadores desde el teclado
        const juego = new JuegoDados(args[0], args[1]);
        juego.iniciarJuego();
        if (juego.vencedor === null)
            console.log("Empate. No hay un vencedor");
        else
            console.log("El vencedor es: " + juego.vencedor.nombre);
    }
}
