export class Dado {
    puntos;
    lanzar() {
        this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
