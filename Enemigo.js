class Enemigo{
    constructor(posx, posy) {
     

        this.posx = posx;
        this.posy = posy;
        this.velocidad = 0.5;
        this.vida=1;
        this.tamanno = 50;
        this.dirx = 1;
        this.diry = 0;
    }  

    mover(){
      
        this.posx+=this.velocidad*this.dirx;
        this.posy+=this.velocidad*this.diry;
    }

    derecho(){
        this.dirx=1;
        this.diry=0;
    }
    arriba(){
        this.dirx=1;
        this.diry=-1;
    }
    abajo(){
        this.dirx=1;
        this.diry=1;
    }

    enZona(x,y,torresx,torresy){
      if(dist(x,y, torresx, torresy) < 150){
        return true;
      }else{
        return false;
      }
      
    }
    
    lastimar(danno){
      if(this.vida-danno<=0){
        this.vida=0; 
      }else{
        this.vida-=danno;
      }     
    }

    frenar(){
      this.posx+=0;
      this.posy+=0;
    }

    setVelocidad(vel){
      this.velocidad=vel;
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
      getVelocidad() {
        return this.velocidad;
      }
      getVida() {
        return this.vida;
      }
      getdirx() {
        return this.dirx;
      }
      getdiry() {
        return this.diry;
      }
      
}