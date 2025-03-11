export class Jugador {
    nombre;
    puntoGanado;
    /**
     * @param dado1 Primer dado a lanzar
     * @param dado2 Segundo dado a lanzar
     * @return Devuelve la suma de los puntos obtenidos en ambos dados
     */
    lanzaDados(dado1, dado2) {
        dado1.lanzar();
        dado2.lanzar();
        // Retornar los puntos que cayeron en los dados
        return dado1.puntos + dado2.puntos;
    }
}
