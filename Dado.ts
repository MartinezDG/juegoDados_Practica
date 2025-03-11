export class Dado {
    public puntos: number;
    public lanzar(): void {
        this.puntos = Math.floor(Math.random() * 6) + 1;
    }
}
