class Projectilepatrick{
    constructor(posx,posy){
       //this.planklocation=createVector(150,450);
       //this.plankvel=createVector(1,-0.5);
       this.shotlocation = createVector(posx,posy);
       this.shotvel=createVector(0,0);
       this.shotacc=createVector(0,0);
      
    }
    paintshot2(jellyfish){
      //fill(255, 255,0);
      image(jellyfish, this.shotlocation.x,this.shotlocation.y);
      
      }
    chase(enemyposx,enemyposy,enemyvelx,enemyvely){
      this.chaser= createVector (enemyposx+=enemyvelx,enemyposy+=enemyvely);
      this.chaser.sub(this.shotlocation);
      this.chaser.setMag(0.5);
      this.shotacc=this.chaser;
      this.shotvel.add(this.shotacc);
      this.shotlocation.add(this.shotvel);
      this.shotvel.limit(3);
    }

    getPosx() {
      return this.shotlocation.x;
    }
  
    getPosy() {
      return this.shotlocation.y;
    }
    getTamanno() {
      return 10;
    }
    
  }