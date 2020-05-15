class Torre{
    constructor(posx,posy){
        this.posx = posx;
        this.posy = posy;
        this.tamanno = 50;
    } 
    disparar(){

    }
    fijarposicion(x,y){
        this.posx = x;
        this.posy = y;
    }
    getPosx() {
        return this.posx;
      }
    
      getPosy() {
        return this.posy;
      }
      getTamanno() {
        return this.tamanno;
      }
}
