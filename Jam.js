class Jam extends Torre {

    constructor(posx, posy) {
        super(posx,posy);
        this.tamannox = 50;
        this.tamannoy = 100;
    }
    getTamannox() {
        return this.tamannox;
    }
    getTamannoy() {
        return this.tamannoy;
    }
}