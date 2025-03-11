 import {Dado} from './Dado.js';
 export class Jugador {
    
    public nombre: string;
    public puntoGanado: number;

    /**
     * @param dado1 Primer dado a lanzar
     * @param dado2 Segundo dado a lanzar
     * @return Devuelve la suma de los puntos obtenidos en ambos dados
     */
    public lanzaDados(dado1: Dado, dado2: Dado): number {
        dado1.lanzar();
        dado2.lanzar();

        // Retornar los puntos que cayeron en los dados
        return dado1.puntos + dado2.puntos;
    }
}
