

//pantallas
let home1;
let home2;
let home3;
let narrative1_1;
let narrative1_2;
let narrative1_3;
let narrative2_1;
let narrative2_2;
let narrative2_3;
let narrative3_1;
let narrative3_2;
let narrative3_3;
let narrative4_1;
let narrative4_2;
let narrative4_3;
let instructions1_1;
let instructions1_2;
let instructions1_3;
let instructions2_1;
let instructions2_2;
let instructions2_3;
let instructions3_1;
let instructions3_2;
let instructions3_3;
let instructions4_1;
let instructions4_2;
let instructions4_3;



let lose1;
let lose2;

let pantalla;
//mostrar
let patrickStar;
let mostrarPatrick;
let spongeBob;
let mostrarBob;
let jaam;
let mostrarJam;
let gary;
let mostrarGary;
let bobUpGrade;
let mostrarUpGrade;

//matriz
let tamCuad;
let posx;
let posy;

//torres bobesponja
let spongetower = [];
let estadospongetower = [];
let torresx = [];
let torresy = [];
let dispararesponja = [];
let ponertorre;
let shootsponge;
let shootsponges;

//animacion torre bobesponja
arregloBobEsponja = [];
let cont;
let upGradeBlock;
arregloBobEsponjaAtras = [];
let contbob;

//Pre torre bob
let preBob;
let preBobRojo;


//torres patricio
let patricktower = [];
let estadopatricktower = [];
let patrickx = [];
let patricky = [];
let ponerpatrick;
let shootpatricks;

//dibujar  torre patrick
arregloPatrick = [];
let contpatrick;
arregloPatrickAtras = [];
let contPatrickAtras;
//pre torre pratrick
let prePatrick;
let prePatrickRojo;
let spongetowersingle;
let placespongetower;

//Plankkton pequeño
let plank1;
let planktons = [];
let planksin = [];

//animacion plankton pequeño
arregloPlanckton = [];
let contPlanckton;
//sumar dinero
diez = [];
let contDiez;
let mostrarDinero;
let mostrarMasDinero;
//animacion super plankton
arregloSuperPlankton = [];
let contSuper;
//sumar dinero
venticinco = [];
let contVenticinco;


// mapa de juego
mapa = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0],
    [2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2],
    [0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

//dibujar mapa
let map;

let value = 0;

//projectiles
projectiles = [];
projectilespatrick = [];
let loc;
let vel;
let rangespongeshoot;
let rangepatshoot;
let targetsponge;
let removepp;
let removeps;

//dibujar projectil
let carne;
let jellyfish;

let cancelarsponge;
let dannoesponja;
let dannopatrick;

//upgrades
let fireratesponge = [];
let damageboostsponge = [];
let fireratepat = [];
let damageboostpat = [];

//poderes
let ponergary;
let garies;
let estadogary;
let garyx;
let garyy;
let eliminargary;
//dibujar Gary
let garyStop;
//Pre Gary
let preGary;
let preGaryRojo;

//jam
jam = [];
exploJam = [];
let contJam;
let preJam;
let preJamRojo;

let ponerjelly;
let jelly;
let estadojelly;
let jellyx;
let jellyy;
let eliminarjelly;




let garbageOpen;


//variables de timepo
let garytime;
let garytime2;
let garydif;

let jellytime;
let jellytime2;
let jellydif;

// variables de tiempo
let timer2;


let timer;
let timerdif;
let min;
let addmin

//
let randomy1;
let randomy2;

let power;

//krustykrab
let krustykrabhealth;

let youlose;

//money
let money;
let earnings;

// spawners
let spawntimer;
let spawnplank;
let spawnplankbig;
let subspawn;
let subspawnbig;

//sonidos
let musica;


function preload() {
    //Pantallas
    musica = loadSound('imagen/musica.mp3');
    home1 = loadImage("imagen/Home_1.png");
    home2 = loadImage("imagen/Home_2.png");
    home3 = loadImage("imagen/Home_3.png");
    narrative1_1 = loadImage("imagen/Narrative1_1.png");
    narrative1_2 = loadImage("imagen/Narrative1_2.png");
    narrative1_3 = loadImage("imagen/Narrative1_3.png");
    narrative2_1 = loadImage("imagen/Narrative2_1.png");
    narrative2_2 = loadImage("imagen/Narrative2_2.png");
    narrative2_3 = loadImage("imagen/Narrative2_3.png");
    narrative3_1 = loadImage("imagen/Narrative3_1.png");
    narrative3_2 = loadImage("imagen/Narrative3_2.png");
    narrative3_3 = loadImage("imagen/Narrative3_3.png");
    narrative4_1 = loadImage("imagen/Narrative4_1.png");
    narrative4_2 = loadImage("imagen/Narrative4_2.png");
    narrative4_3 = loadImage("imagen/Narrative4_3.png");
    instructions1_1 = loadImage("imagen/Instructions1_1.png");
    instructions1_2 = loadImage("imagen/Instructions1_2.png");
    instructions1_3 = loadImage("imagen/Instructions1_3.png");
    instructions2_1 = loadImage("imagen/Instructions2_1.png");
    instructions2_2 = loadImage("imagen/Instructions2_2.png");
    instructions2_3 = loadImage("imagen/Instructions2_3.png");
    instructions3_1 = loadImage("imagen/Instructions3_1.png");
    instructions3_2 = loadImage("imagen/Instructions3_2.png");
    instructions3_3 = loadImage("imagen/Instructions3_3.png");
    instructions4_1 = loadImage("imagen/Instructions4_1.png");
    instructions4_2 = loadImage("imagen/Instructions4_2.png");
    instructions4_3 = loadImage("imagen/Instructions4_3.png");
    lose1 = loadImage("imagen/Lose_1.png");
    lose2 = loadImage("imagen/Lose_2.png");


    //dibujar mapa
    map = loadImage('imagen/mapa.png');
    //elementos
    upGradeBlock = loadImage('imagen/upGradeBlock.png');
    garyStop = loadImage('imagen/garystop.png');
    fuente = loadFont('fuente/someTimeLater.otf');
    garbageOpen = loadImage('imagen/garbageOpen.png');
    carne = loadImage('imagen/burger.png');
    jellyfish = loadImage('imagen/medusa.png');
    preBob = loadImage('imagen/bobPreTorre.png');
    preBobRojo = loadImage('imagen/bobPreTorreRojo.png');
    prePatrick = loadImage('imagen/patrickPreTorre.png');
    prePatrickRojo = loadImage('imagen/patrickPreTorreRojo.png');
    preGary = loadImage('imagen/preGary.png');
    preGaryRojo = loadImage('imagen/preGaryRojo.png');

    diez[0] = loadImage('imagen/diezBig.png');
    diez[1] = loadImage('imagen/diezSmall.png');




    arregloBobEsponja[0] = loadImage('imagen/bobFrente3.png');
    arregloBobEsponja[1] = loadImage('imagen/bobFrente1.png');
    arregloBobEsponja[2] = loadImage('imagen/bobFrente2.png');

    arregloBobEsponjaAtras[0] = loadImage('imagen/bobAtras3.png');
    arregloBobEsponjaAtras[1] = loadImage('imagen/bobAtras1.png');
    arregloBobEsponjaAtras[2] = loadImage('imagen/bobAtras2.png');

    arregloPatrick[0] = loadImage('imagen/patrickFrente3.png');
    arregloPatrick[1] = loadImage('imagen/patrickFrente1.png');
    arregloPatrick[2] = loadImage('imagen/patrickFrente2.png');

    arregloPatrickAtras[0] = loadImage('imagen/patrickAtras3.png');
    arregloPatrickAtras[1] = loadImage('imagen/patrickAtras1.png');
    arregloPatrickAtras[2] = loadImage('imagen/patrickAtras2.png');

    arregloPlanckton[0] = loadImage('imagen/Plankton1.png');
    arregloPlanckton[1] = loadImage('imagen/Plankton2.png');

    arregloSuperPlankton[0] = loadImage('imagen/Superplankton1.png');
    arregloSuperPlankton[1] = loadImage('imagen/Superplankton2.png');

    exploJam[0] = loadImage('imagen/jamBig.png');
    exploJam[1] = loadImage('imagen/jamBig2.png');
    preJam = loadImage('imagen/preJam.png');
    preJamRojo = loadImage('imagen/preJamRojo.png');

    spongeBob = loadImage('imagen/spongeBob.png');
    patrickStar = loadImage('imagen/patrickStar.png');
    gary = loadImage('imagen/gary.png');
    jaam = loadImage('imagen/jam.png');
    bobUpGrade = loadImage('imagen/bobUpGrade.png');
   


}

function setup() {
    createCanvas(1200, 700);
    reiniciar();

    musica.loop();
    musica.setVolume(0.6);

}

function draw() {

    switch (pantalla) {
        case 0:


            image(home1, 0, 0);

            if (565 < mouseX && mouseX < 949 && 140 < mouseY && mouseY < 252) {
                image(home2, 0, 0);

            }
            if (565 < mouseX && mouseX < 949 && 305 < mouseY && mouseY < 415) {
                image(home3, 0, 0);

            }

            break;
        case 1:

            image(narrative1_1, 0, 0);

            if (28 < mouseX && mouseX < 173 && 594 < mouseY && mouseY < 661) {
                image(narrative1_2, 0, 0);
            }

            if (620 < mouseX && mouseX < 775 && 594 < mouseY && mouseY < 661) {
                image(narrative1_3, 0, 0);
            }

            break;
        case 2:

            image(narrative2_1, 0, 0);

            if (28 < mouseX && mouseX < 173 && 594 < mouseY && mouseY < 661) {
                image(narrative2_2, 0, 0);
            }

            if (620 < mouseX && mouseX < 775 && 594 < mouseY && mouseY < 661) {
                image(narrative2_3, 0, 0);
            }

            break;
        case 3:

            image(narrative3_1, 0, 0);

            if (28 < mouseX && mouseX < 173 && 594 < mouseY && mouseY < 661) {
                image(narrative3_2, 0, 0);
            }

            if (620 < mouseX && mouseX < 775 && 594 < mouseY && mouseY < 661) {
                image(narrative3_3, 0, 0);
            }

            break;
        case 4:
            timer2 = floor(millis() / 1000);
            image(narrative4_1, 0, 0);

            if (28 < mouseX && mouseX < 173 && 594 < mouseY && mouseY < 661) {
                image(narrative4_2, 0, 0);
            }

            if (620 < mouseX && mouseX < 775 && 594 < mouseY && mouseY < 661) {
                image(narrative4_3, 0, 0);
            }

            break;
        case 5:
            background(0);


            spawntimer = floor(millis() / 1000);
            timerdif = floor(millis() / 1000)  - timer2;
            timer= timerdif- 60 * min;

            if (timerdif % 60 == 0 && timer >= 1) {
                addmin = true;

            }

            if (addmin == true) {
                min = min + 1;
                addmin = false;
            }


            if (frameCount % 500 == 0 && timer >= 1) {

                subspawn = true;
            }

            if (subspawn == true) {
                spawnplank = spawnplank - 5;
                subspawn = false;
            }

            if (spawnplank <= 5) {
                spawnplank = 5;
            }

            if (frameCount % 1500 == 0 && timer >= 1) {
                subspawnbig = true;
            }

            if (subspawnbig == true) {
                spawnplankbig = spawnplankbig - 50;
                subspawnbig = false;
            }

            if (spawnplankbig <= 300) {
                spawnplankbig = 300;
            }


            //console.log(spawnplank + ',' + spawnplankbig);
            jellytime2 = floor(millis() / 1000);

            jellydif = jellytime2 - jellytime;

            garytime2 = floor(millis() / 1000);

            garydif = garytime2 - garytime;



            for (let columnas = 0; columnas < 24; columnas++) {
                for (let filas = 0; filas < 14; filas++) {
                    if (mapa[filas][columnas] == 0) {

                        fill(0, 0, 255);
                        rect(posx + (columnas * tamCuad), posy + (filas * tamCuad), tamCuad, tamCuad);
                    }
                    if (mapa[filas][columnas] == 1) {
                        fill(255, 0, 0);
                        rect(posx + (columnas * tamCuad), posy + (filas * tamCuad), tamCuad, tamCuad);

                    }
                    if (mapa[filas][columnas] == 2) {
                        fill(0, 255, 0);
                        rect(posx + (columnas * tamCuad), posy + (filas * tamCuad), tamCuad, tamCuad);

                    }

                }
            }

            fill(255, 255, 0);
            rect(650, 600, 100, 100);
            fill(255, 182, 193);
            rect(850, 600, 100, 100);
            fill(255, 0, 255);
            rect(250, 600, 100, 100);
            fill(128, 0, 128);
            rect(450, 600, 100, 100);
            fill(128, 0, 128);
            rect(1050, 200, 150, 100);


            image(map, 0, 0, 1200, 700);
            if (mouseX > 955 && mouseX < 1045 && mouseY > 580 && mouseY < 693) {
                image(garbageOpen, 953, 509);
            }
            fill(0);
            rect(1060, 175, 125, 12);
            fill(255, 0, 0);
            rect(1062, 177, krustykrabhealth, 8);

            
            if (money >= 200) {
                mostrarBob = true;
            } else {
                mostrarBob = false;
            }

            if (mostrarBob == true) {
                image(spongeBob, 547, 589);
            }

            if (money >= 300) {
                mostrarPatrick = true;
            }else {
                mostrarPatrick = false;
            }
            if (mostrarPatrick == true) {
                image(patrickStar, 747, 589);
            }

            if (money>= 75) {
                mostrarGary = true;
            } else {
                mostrarGary = false;
            }
            if (mostrarGary == true) {
                image(gary, 147, 589);
            }

            if (money >= 50) {
                mostrarJam = true;
            }else {
                mostrarJam = false;
            }
            if (mostrarJam == true) {
                image(jaam, 347, 589);
            }


            for (let i = 0; i < garies.length; i++) {
                if (estadogary[i] == 1) {
                    garies[i].fijarposicion(mouseX, mouseY);
                    dibujarPregary(garies[i]);
                    garytime2 = 0;
                }
                if (estadogary[i] == 2) {
                    garies[i].fijarposicion(garyx[i], garyy[i]);
                    dibujarGary(garies[i]);
                    //console.log(1);

                }

            }

            for (let i = 0; i < jelly.length; i++) {
                if (estadojelly[i] == 1) {
                    jelly[i].fijarposicion(mouseX, mouseY);
                    dibujarPrejelly(jelly[i]);
                    garytime2 = 0;
                }
                if (estadojelly[i] == 2) {
                    jelly[i].fijarposicion(jellyx[i], jellyy[i]);
                    dibujarJelly(jelly[i]);
                    //console.log(1);

                }

            }

            if (garydif % 5 == 0 && garydif >= 1 && estadogary[0] == 2) {
                eliminargary = true;

            }
            if (eliminargary) {
                garies.splice(0, 1);
                estadogary.splice(0, 1);
                garyx.splice(0, 1);
                garyy.splice(0, 1);

                eliminargary = false;
            }

            if (jellydif % 5 == 0 && jellydif >= 1 && estadojelly[0] == 2) {
                eliminarjelly = true;

            }
            if (eliminarjelly) {
                jelly.splice(0, 1);
                estadojelly.splice(0, 1);
                jellyx.splice(0, 1);
                jellyy.splice(0, 1);

                eliminarjelly = false;
            }


            if ((frameCount % spawnplank == 0)) {
                randomy = random(260, 290);
                planktons.push(new Plankton(-30, randomy));

            }

            if ((frameCount % spawnplankbig == 0)) {
                randomy2 = random(260, 290);
                planktons.push(new Bigplankton(-50, randomy2));
            }
            for (let i = 0; i < planktons.length; i++) {
                dibujarPlankton(planktons[i]);

                switch (power) {

                    case 1:
                        if (garies[0]) {

                            if (garyBlock(planktons[i], garies[0]) && estadogary[0] == 2) {
                                planktons[i].frenar();
                            } else {
                                if (planktons[i] instanceof Plankton) {

                                    planktons[i].setVelocidad(0.25);

                                }
                                if (planktons[i] instanceof Bigplankton) {

                                    planktons[i].setVelocidad(0.125);

                                }
                                planktons[i].mover();

                                if (planktons[i].getPosx() == 225 || planktons[i].getPosx() == 725
                                    || planktons[i].getPosx() == 925) {
                                    planktons[i].arriba();
                                }
                                if (planktons[i].getPosx() == 275 || planktons[i].getPosx() == 425
                                    || planktons[i].getPosx() == 575 || planktons[i].getPosx() == 675
                                    || planktons[i].getPosx() == 825 || planktons[i].getPosx() == 975
                                    || planktons[i].getPosx() == 1125) {
                                    planktons[i].derecho();
                                }
                                if (planktons[i].getPosx() == 375 || planktons[i].getPosx() == 525
                                    || planktons[i].getPosx() == 625 || planktons[i].getPosx() == 1075) {
                                    planktons[i].abajo();
                                }
                            }


                        } else {
                            if (planktons[i] instanceof Plankton) {

                                planktons[i].setVelocidad(0.25);
                            }
                            if (planktons[i] instanceof Bigplankton) {

                                planktons[i].setVelocidad(0.125);

                            }
                            planktons[i].mover();

                            if ((planktons[i].getPosx() >= 225 && planktons[i].getPosx() <= 226) || (planktons[i].getPosx() >= 725 && planktons[i].getPosx() <= 726)
                                || (planktons[i].getPosx() >= 925 && planktons[i].getPosx() <= 926)) {
                                planktons[i].arriba();
                            }
                            if ((planktons[i].getPosx() >= 275 && planktons[i].getPosx() <= 276) || (planktons[i].getPosx() >= 425 && planktons[i].getPosx() <= 426)
                                || (planktons[i].getPosx() >= 575 && planktons[i].getPosx() <= 576) || (planktons[i].getPosx() >= 675 && planktons[i].getPosx() <= 676)
                                || (planktons[i].getPosx() >= 825 && planktons[i].getPosx() <= 826) || (planktons[i].getPosx() >= 975 && planktons[i].getPosx() <= 976)
                                || (planktons[i].getPosx() >= 1125 && planktons[i].getPosx() <= 1126)) {
                                planktons[i].derecho();
                            }
                            if ((planktons[i].getPosx() >= 375 && planktons[i].getPosx() <= 376) || (planktons[i].getPosx() >= 525 && planktons[i].getPosx() <= 526)
                                || (planktons[i].getPosx() >= 625 && planktons[i].getPosx() <= 626) || (planktons[i].getPosx() >= 1075 && planktons[i].getPosx() <= 1076)) {
                                planktons[i].abajo();
                            }


                        }
                        break;


                    case 2:
                        if (jelly[0]) {
                            // console.log('yes')
                            if (jellySlow(planktons[i], jelly[0]) && estadojelly[0] == 2) {
                                if (planktons[i] instanceof Plankton) {

                                    planktons[i].setVelocidad(0.125);
                                    if ((planktons[i].getPosx() >= 225 && planktons[i].getPosx() <= 226) || (planktons[i].getPosx() >= 725 && planktons[i].getPosx() <= 726)
                                        || (planktons[i].getPosx() >= 925 && planktons[i].getPosx() <= 926)) {
                                        planktons[i].arriba();
                                    }
                                    if ((planktons[i].getPosx() >= 275 && planktons[i].getPosx() <= 276) || (planktons[i].getPosx() >= 425 && planktons[i].getPosx() <= 426)
                                        || (planktons[i].getPosx() >= 575 && planktons[i].getPosx() <= 576) || (planktons[i].getPosx() >= 675 && planktons[i].getPosx() <= 676)
                                        || (planktons[i].getPosx() >= 825 && planktons[i].getPosx() <= 826) || (planktons[i].getPosx() >= 975 && planktons[i].getPosx() <= 976)
                                        || (planktons[i].getPosx() >= 1125 && planktons[i].getPosx() <= 1126)) {
                                        planktons[i].derecho();
                                    }
                                    if ((planktons[i].getPosx() >= 375 && planktons[i].getPosx() <= 376) || (planktons[i].getPosx() >= 525 && planktons[i].getPosx() <= 526)
                                        || (planktons[i].getPosx() >= 625 && planktons[i].getPosx() <= 626) || (planktons[i].getPosx() >= 1075 && planktons[i].getPosx() <= 1076)) {
                                        planktons[i].abajo();
                                    }

                                }
                                if (planktons[i] instanceof Bigplankton) {

                                    planktons[i].setVelocidad(0.0625);
                                    if ((planktons[i].getPosx() >= 225 && planktons[i].getPosx() <= 226) || (planktons[i].getPosx() >= 725 && planktons[i].getPosx() <= 726)
                                        || (planktons[i].getPosx() >= 925 && planktons[i].getPosx() <= 926)) {
                                        planktons[i].arriba();
                                    }
                                    if ((planktons[i].getPosx() >= 275 && planktons[i].getPosx() <= 276) || (planktons[i].getPosx() >= 425 && planktons[i].getPosx() <= 426)
                                        || (planktons[i].getPosx() >= 575 && planktons[i].getPosx() <= 576) || (planktons[i].getPosx() >= 675 && planktons[i].getPosx() <= 676)
                                        || (planktons[i].getPosx() >= 825 && planktons[i].getPosx() <= 826) || (planktons[i].getPosx() >= 975 && planktons[i].getPosx() <= 976)
                                        || (planktons[i].getPosx() >= 1125 && planktons[i].getPosx() <= 1126)) {
                                        planktons[i].derecho();
                                    }
                                    if ((planktons[i].getPosx() >= 375 && planktons[i].getPosx() <= 376) || (planktons[i].getPosx() >= 525 && planktons[i].getPosx() <= 526)
                                        || (planktons[i].getPosx() >= 625 && planktons[i].getPosx() <= 626) || (planktons[i].getPosx() >= 1075 && planktons[i].getPosx() <= 1076)) {
                                        planktons[i].abajo();
                                    }
                                }
                                planktons[i].mover();

                            } else {
                                planktons[i].setVelocidad(0.25);
                                planktons[i].mover();
                                if ((planktons[i].getPosx() >= 225 && planktons[i].getPosx() <= 226) || (planktons[i].getPosx() >= 725 && planktons[i].getPosx() <= 726)
                                    || (planktons[i].getPosx() >= 925 && planktons[i].getPosx() <= 926)) {
                                    planktons[i].arriba();
                                }
                                if ((planktons[i].getPosx() >= 275 && planktons[i].getPosx() <= 276) || (planktons[i].getPosx() >= 425 && planktons[i].getPosx() <= 426)
                                    || (planktons[i].getPosx() >= 575 && planktons[i].getPosx() <= 576) || (planktons[i].getPosx() >= 675 && planktons[i].getPosx() <= 676)
                                    || (planktons[i].getPosx() >= 825 && planktons[i].getPosx() <= 826) || (planktons[i].getPosx() >= 975 && planktons[i].getPosx() <= 976)
                                    || (planktons[i].getPosx() >= 1125 && planktons[i].getPosx() <= 1126)) {
                                    planktons[i].derecho();
                                }
                                if ((planktons[i].getPosx() >= 375 && planktons[i].getPosx() <= 376) || (planktons[i].getPosx() >= 525 && planktons[i].getPosx() <= 526)
                                    || (planktons[i].getPosx() >= 625 && planktons[i].getPosx() <= 626) || (planktons[i].getPosx() >= 1075 && planktons[i].getPosx() <= 1076)) {
                                    planktons[i].abajo();
                                }
                            }


                        } else {
                            if (planktons[i] instanceof Plankton) {

                                planktons[i].setVelocidad(0.25);

                            }
                            if (planktons[i] instanceof Bigplankton) {

                                planktons[i].setVelocidad(0.125);

                            }

                            planktons[i].mover();

                            if ((planktons[i].getPosx() >= 225 && planktons[i].getPosx() <= 226) || (planktons[i].getPosx() >= 725 && planktons[i].getPosx() <= 726)
                                || (planktons[i].getPosx() >= 925 && planktons[i].getPosx() <= 926)) {
                                planktons[i].arriba();
                            }
                            if ((planktons[i].getPosx() >= 275 && planktons[i].getPosx() <= 276) || (planktons[i].getPosx() >= 425 && planktons[i].getPosx() <= 426)
                                || (planktons[i].getPosx() >= 575 && planktons[i].getPosx() <= 576) || (planktons[i].getPosx() >= 675 && planktons[i].getPosx() <= 676)
                                || (planktons[i].getPosx() >= 825 && planktons[i].getPosx() <= 826) || (planktons[i].getPosx() >= 975 && planktons[i].getPosx() <= 976)
                                || (planktons[i].getPosx() >= 1125 && planktons[i].getPosx() <= 1126)) {
                                planktons[i].derecho();
                            }
                            if ((planktons[i].getPosx() >= 375 && planktons[i].getPosx() <= 376) || (planktons[i].getPosx() >= 525 && planktons[i].getPosx() <= 526)
                                || (planktons[i].getPosx() >= 625 && planktons[i].getPosx() <= 626) || (planktons[i].getPosx() >= 1075 && planktons[i].getPosx() <= 1076)) {
                                planktons[i].abajo();
                            }

                        }
                }

                if (dannoKrusty(planktons[i])) {

                    if (planktons[i] instanceof Plankton) {
                        krustykrabhealth -= 6.1;
                    }
                    if (planktons[i] instanceof Bigplankton) {
                        krustykrabhealth -= 24.4;
                    }
                    planktons.splice(i, 1);

                }


            }

            if (krustykrabhealth <= 0) {
                krustykrabhealth = 0;
            }

            if (krustykrabhealth == 0) {
                youlose = true;
            }
            if (youlose) {
                pantalla = 6;
            }

            for (let i = 0; i < spongetower.length; i++) {
                if (estadospongetower[i] == 1) {
                    spongetower[i].fijarposicion(mouseX, mouseY);
                    dibujarPreTorre(spongetower[i]);
                }
                if (estadospongetower[i] == 2) {
                    spongetower[i].fijarposicion(torresx[i], torresy[i]);
                    dibujarTorre(spongetower[i]);

                }

            }
            for (let i = 0; i < patricktower.length; i++) {
                if (estadopatricktower[i] == 1) {
                    patricktower[i].fijarposicion(mouseX, mouseY);
                    dibujarPreTorre(patricktower[i]);
                }
                if (estadopatricktower[i] == 2) {
                    patricktower[i].fijarposicion(patrickx[i], patricky[i]);
                    dibujarTorre(patricktower[i]);

                }

            }






            //move(plank1);
            /*dibujarPlankton(plank1);
            if(plank1.getPosx()==225 || plank1.getPosx()==725 
            || plank1.getPosx()== 925){
                plank1.arriba();
            }
            if(plank1.getPosx()==275 ||plank1.getPosx()==425 
            || plank1.getPosx()== 575 || plank1.getPosx()==675
            || plank1.getPosx()== 825 || plank1.getPosx()==975
            || plank1.getPosx()== 1125){
                plank1.derecho();
            }
            if(plank1.getPosx()==375 ||plank1.getPosx()==525
            || plank1.getPosx()== 625 || plank1.getPosx()==1075){
                plank1.abajo();
            }*/
            //dibujarPlankton(plank1);
            //plank1.mover();


            /* if (placespongetower == 1) {
                 spongetowersingle.fijarposicion(mouseX, mouseY);
                 dibujarPreTorre(spongetowersingle);
             }
             if (placespongetower == 2) {
                 dibujarTorre(spongetowersingle);
         
             }*/

            /* for (let i = 0; i < shootsponges.length; i++) {
                 if (planktons[targetsponge[i]]) { 
                 if (shootsponges[i] == true && planktons[targetsponge[i]].enZona(planktons[targetsponge[i]].getPosx(),planktons[targetsponge[i]].getPosy(),torresx[i], torresy[i]) ) {
                     if ((frameCount % 200 == 0 && planktons[i])) {
                         projectiles.push(new Projectile(spongetower[i].getPosx(), spongetower[i].getPosy()));
                     }
                 } else if (planktons[targetsponge[i]].enZona(planktons[targetsponge[i]].getPosx(),planktons[targetsponge[i]].getPosy(),torresx[i], torresy[i])==false) {
                     do {
                         targetsponge[i]+=1;
                       } while (planktons[targetsponge[i]].enZona(planktons[targetsponge[i]].getPosx(),planktons[targetsponge[i]].getPosy(),torresx[i], torresy[i])==false);
                 }
             
             }
             }*/


            if (planktons.length != 0) {


                for (let i = 0; i < shootsponges.length; i++) {
                    if (shootsponges[i] == true && planktons[i]) {

                        if (fireratesponge[i] == true) {
                            if ((frameCount % 100 == 0)) {
                                projectiles.push(new Projectile(spongetower[i].getPosx(), spongetower[i].getPosy()));

                            }
                        }
                        if (fireratesponge[i] == false) {
                            if ((frameCount % 200 == 0)) {
                                projectiles.push(new Projectile(spongetower[i].getPosx(), spongetower[i].getPosy()));

                            }
                        }



                    }
                }
            }
            if (planktons.length < 0) {
                projectiles.pop();
                projectilespatrick.pop()
            }

            for (let i = 0; i < shootpatricks.length; i++) {
                if (shootpatricks[i] == true && planktons[i]) {

                    if (fireratepat[i] == true) {
                        if ((frameCount % 200 == 0)) {
                            projectilespatrick.push(new Projectilepatrick(patricktower[i].getPosx(), patricktower[i].getPosy()));

                        }
                    }
                    if (fireratepat[i] == false) {
                        if ((frameCount % 400 == 0)) {
                            projectilespatrick.push(new Projectilepatrick(patricktower[i].getPosx(), patricktower[i].getPosy()));

                        }
                    }

                }
            }



            for (let i = 0; i < spongetower.length; i++) {
                if (projectiles[i]) {
                    projectiles[i].paintshot(carne);
                    if (planktons[targetsponge[i]]) {
                        projectiles[i].chase(planktons[targetsponge[i]].getPosx(), planktons[targetsponge[i]].getPosy(), planktons[targetsponge[i]].getVelocidad(), planktons[targetsponge[i]].getVelocidad());
                        lastimar(planktons[targetsponge[i]], projectiles[i]);
                        if (removeps == true) {
                            projectiles.splice(i, 1);
                            if (damageboostsponge[i] == true) {
                                dannoesponja = 0.5;
                            }
                            if (damageboostsponge[i] == false) {
                                dannoesponja = 0.25;
                            }

                            planktons[targetsponge[i]].lastimar(dannoesponja);
                            removeps = false;
                        }
                        if (planktons[targetsponge[i]].getVida() == 0) {
                            if (planktons[targetsponge[i]] instanceof Plankton) {
                                money += 25;
                                earnings += 25;
                            }
                            if (planktons[targetsponge[i]] instanceof Bigplankton) {
                                money += 50;
                                earnings += 50;
                            }
                            planktons.splice(targetsponge[i], 1);
                        }
                    }
                }
            }

            for (let i = 0; i < patricktower.length; i++) {
                if (projectilespatrick[i]) {
                    projectilespatrick[i].paintshot2(jellyfish);
                    if (planktons[targetpatrick[i]]) {
                        projectilespatrick[i].chase(planktons[targetpatrick[i]].getPosx(), planktons[targetpatrick[i]].getPosy(), planktons[targetpatrick[i]].getVelocidad(), planktons[targetpatrick[i]].getVelocidad());
                        lastimar(planktons[targetpatrick[i]], projectilespatrick[i]);
                        if (removepp == true) {
                            projectilespatrick.splice(i, 1);
                            if (damageboostpat[i] == true) {
                                dannopatrick = 1;
                            }
                            if (damageboostpat[i] == false) {
                                dannopatrick = 0.5;
                            }

                            planktons[targetpatrick[i]].lastimar(dannopatrick);
                            removepp = false;
                        }
                        if (planktons[targetpatrick[i]].getVida() == 0) {
                            if (planktons[targetpatrick[i]] instanceof Plankton) {
                                money += 25;
                                earnings += 25;
                            }
                            if (planktons[targetpatrick[i]] instanceof Bigplankton) {
                                money += 50;
                                earnings += 50;
                            }
                            planktons.splice(targetpatrick[i], 1);
                        }
                    }
                }
            }




            /* for (let i = 0; i < projectiles.length; i++) {
                 projectiles[i].paintshot();
                 if (planktons[i]) {
                     projectiles[i].chase(planktons[i].getPosx(), planktons[i].getPosy(), planktons[i].getVelocidad(), planktons[i].getVelocidad());
         
                     lastimar(planktons[i], projectiles[i]);
                     if (planktons[i].getVida() == 0) {
                         planktons.splice(i, 1);
                     }
                     //console.log(planktons[i].getVida());
                 }
         
             }*/
            /*for (let i = 0; i < projectilespatrick.length; i++) {
                projectilespatrick[i].paintshot2();
                if (planktons[i]) {
                    projectilespatrick[i].chase(planktons[i].getPosx(), planktons[i].getPosy(), planktons[i].getVelocidad(), planktons[i].getVelocidad());
                    lastimar(planktons[i], projectilespatrick[i]);
                   
                    if (planktons[i].getVida() == 0) {
                        planktons.splice(i, 1);
        
                    }
                }
            }*/


            //console.log(spawnplank);

            fill(255);
            //text(spawnplank, 250, 50);
            textFont(fuente);
            textSize(30);
            fill(255);
            text(min + ':' + timer, 800, 55);
            //text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
            text('$' + money, 450, 55);


            break;

        case 6:
            image(lose1, 0, 0);
            if (35 < mouseX && mouseX < 422 && 555 < mouseY && mouseY < 665) {
                image(lose2, 0, 0);
            }

            fill(0);
            textFont(fuente);
            textSize(60);
            text(min + ':' + timer, 560, 320);
            text(earnings + ' dollars', 510, 450);
            //text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
            break;
        case 7:

            image(instructions1_1, 0, 0);

            if (89 < mouseX && mouseX < 213 && 619 < mouseY && mouseY < 669) {
                image(instructions1_2, 0, 0);
            }
            if (1027 < mouseX && mouseX < 1156 && 619 < mouseY && mouseY < 669) {
                image(instructions1_3, 0, 0);
            }
            break;
        case 8:

            image(instructions2_1, 0, 0);

            if (89 < mouseX && mouseX < 213 && 619 < mouseY && mouseY < 669) {
                image(instructions2_2, 0, 0);
            }
            if (1027 < mouseX && mouseX < 1156 && 619 < mouseY && mouseY < 669) {
                image(instructions2_3, 0, 0);
            }
            break;
        case 9:

            image(instructions3_1, 0, 0);

            if (89 < mouseX && mouseX < 213 && 619 < mouseY && mouseY < 669) {
                image(instructions3_2, 0, 0);
            }
            if (1027 < mouseX && mouseX < 1156 && 619 < mouseY && mouseY < 669) {
                image(instructions3_3, 0, 0);
            }
            break;
        case 10:

            image(instructions4_1, 0, 0);

            if (89 < mouseX && mouseX < 213 && 619 < mouseY && mouseY < 669) {
                image(instructions4_2, 0, 0);
            }
            if (1027 < mouseX && mouseX < 1156 && 619 < mouseY && mouseY < 669) {
                image(instructions4_3, 0, 0);
            }
            break;

    }
    console.log(timer2);
}


function mousePressed() {

    //cambio de pantallas
    switch (pantalla) {

        case 0:
            image(home1, 0, 0);

            if (565 < mouseX && mouseX < 949 && 140 < mouseY && mouseY < 252) {
                image(home2, 0, 0);
                pantalla = 1;
            }
            if (565 < mouseX && mouseX < 949 && 305 < mouseY && mouseY < 415) {
                image(home3, 0, 0);
                pantalla = 7;
            }
            break;

        case 1:

            image(narrative2_1, 0, 0);

            if (28 < mouseX && mouseX < 173 && 594 < mouseY && mouseY < 661) {
                image(narrative2_2, 0, 0);
                pantalla = 0;
            }

            if (620 < mouseX && mouseX < 775 && 594 < mouseY && mouseY < 661) {
                image(narrative2_3, 0, 0);
                pantalla = 2;
            }
            break;

        case 2:
            image(narrative2_1, 0, 0);

            if (28 < mouseX && mouseX < 173 && 594 < mouseY && mouseY < 661) {
                image(narrative2_2, 0, 0);
                pantalla = 1;
            }

            if (620 < mouseX && mouseX < 775 && 594 < mouseY && mouseY < 661) {
                image(narrative2_3, 0, 0);
                pantalla = 3;
            }

            break;


        case 3:
            image(narrative3_1, 0, 0);

            if (28 < mouseX && mouseX < 173 && 594 < mouseY && mouseY < 661) {
                image(narrative3_2, 0, 0);
                pantalla = 2;
            }

            if (620 < mouseX && mouseX < 775 && 594 < mouseY && mouseY < 661) {
                image(narrative3_3, 0, 0);
                pantalla = 4;
            }

            break;

        case 4:
            image(narrative4_1, 0, 0);

            if (28 < mouseX && mouseX < 173 && 594 < mouseY && mouseY < 661) {
                image(narrative4_2, 0, 0);
                pantalla = 3;
            }

            if (620 < mouseX && mouseX < 775 && 594 < mouseY && mouseY < 661) {
                image(narrative4_3, 0, 0);
                pantalla = 5;
            }

            break;
        case 5:
            if (ponertorre == false && ponerpatrick == false && ponerjelly == false && ponergary == false && money >= 200) {
                if (mouseX > 546 && mouseX < 652 && mouseY > 600 && mouseY < 700) {
                    estadospongetower.push(1);
                    spongetower.push(new Bobespatula(mouseX, mouseY));
                    targetsponge.push(0);
                    fireratesponge.push(false);
                    damageboostsponge.push(false);
                    ponertorre = true;
                    //spongetowersingle=new Bobespatula(mouseX,mouseY)
                    //placespongetower=1;
                }
            }
            if (ponertorre == true) {
                if (mouseX > 955 && mouseX < 1045 && mouseY > 580 && mouseY < 693) {
                    //cancelarsponge=true;
                    estadospongetower.pop();
                    spongetower.pop();
                    targetsponge.pop();
                    fireratesponge.pop();
                    damageboostsponge.pop();
                    ponertorre = false;

                }
            }
            if (ponertorre == true) {
                if (!(mouseX > 650 && mouseX < 750 && mouseY > 600 && mouseY < 700) && mapa[floor(mouseY / 50)][floor(mouseX / 50)] == 0) {
                    //placespongetower=2;
                    //spongetowersingle.fijarposicion(floor(mouseX/50)*50,floor(mouseY/50)*50);
                    //shootsponge=true;
                    for (let i = 0; i < estadospongetower.length; i++) {
                        estadospongetower[i] = 2;
                        //spongetower[i].fijarposicion(floor(mouseX / 50) * 50, floor(mouseY / 50) * 50);

                    }
                    torresx.push(floor(mouseX / 50) * 50);
                    torresy.push(floor(mouseY / 50) * 50);
                    shootsponges.push(true);
                    ponertorre = false;
                    money -= 200;
                }
            }
            if (ponerpatrick == false && ponertorre == false && ponerjelly == false && ponergary == false && money >= 300) {
                if (mouseX > 747 && mouseX < 851 && mouseY > 600 && mouseY < 700) {
                    estadopatricktower.push(1);
                    patricktower.push(new Patrickjellyfisher(mouseX, mouseY));
                    ponerpatrick = true;
                    targetpatrick.push(0);
                    fireratepat.push(false);
                    damageboostpat.push(false);
                    //spongetowersingle=new Bobespatula(mouseX,mouseY)
                    //placespongetower=1;
                }
            }
            if (ponerpatrick == true) {
                if (mouseX > 955 && mouseX < 1045 && mouseY > 580 && mouseY < 693) {
                    //cancelarsponge=true;
                    estadopatricktower.pop();
                    patricktower.pop();
                    targetpatrick.pop();
                    fireratepat.pop();
                    damageboostpat.pop();
                    ponerpatrick = false;

                }
            }
            if (ponerpatrick == true) {
                if (!(mouseX > 650 && mouseX < 750 && mouseY > 600 && mouseY < 700) && mapa[floor(mouseY / 50)][floor(mouseX / 50)] == 0) {
                    for (let i = 0; i < estadopatricktower.length; i++) {
                        estadopatricktower[i] = 2;
                        //spongetower[i].fijarposicion(floor(mouseX/50)*50,floor(mouseY/50)*50);
                    }
                    patrickx.push(floor(mouseX / 50) * 50);
                    patricky.push(floor(mouseY / 50) * 50);
                    shootpatricks.push(true);
                    //placespongetower=2;
                    //spongetowersingle.fijarposicion(floor(mouseX/50)*50,floor(mouseY/50)*50);
                    ponerpatrick = false;
                    money -= 300;
                }
            }

            for (let i = 0; i < spongetower.length; i++) {
                if (fireratesponge[i] == false && damageboostsponge[i] == false) {
                    if (mouseX > torresx[i] && mouseX < torresx[i] + 50 && mouseY > torresy[i] - 25 && mouseY < torresy[i] && money >= 150) {
                        fireratesponge[i] = true;
                        damageboostsponge[i] = true;
                        money -= 150;
                    }
                }
            }
            for (let i = 0; i < patricktower.length; i++) {
                if (fireratepat[i] == false && damageboostpat[i] == false) {
                    if (mouseX > patrickx[i] && mouseX < patrickx[i] + 50 && mouseY > patricky[i] - 25 && mouseY < patricky[i] && money >= 150) {
                        fireratepat[i] = true;
                        damageboostpat[i] = true;
                        money -= 150;
                    }
                }
            }


            if (ponertorre == false && ponerpatrick == false && ponerjelly == false && ponergary == false && !garies[0] && money >= 75) {
                if (mouseX > 147 && mouseX < 252 && mouseY > 600 && mouseY < 700) {
                    estadogary.push(1);
                    garies.push(new Gary(mouseX, mouseY));
                    ponergary = true;

                    //spongetowersingle=new Bobespatula(mouseX,mouseY)
                    //placespongetower=1;
                }
            }
            if (ponergary == true) {
                if (mouseX > 955 && mouseX < 1045 && mouseY > 580 && mouseY < 693) {
                    //cancelarsponge=true;
                    estadogary.pop();
                    garies.pop();
                    ponergary = false;

                }
            }
            if (ponergary == true) {
                if (!(mouseX > 650 && mouseX < 750 && mouseY > 600 && mouseY < 700) && mapa[floor(mouseY / 50)][floor(mouseX / 50)] == 2) {
                    //placespongetower=2;
                    //spongetowersingle.fijarposicion(floor(mouseX/50)*50,floor(mouseY/50)*50);
                    //shootsponge=true;
                    for (let i = 0; i < estadogary.length; i++) {
                        estadogary[i] = 2;
                        //garies[i].fijarposicion(floor(mouseX / 50) * 50, floor(mouseY / 50) * 50);

                    }
                    garytime = floor(millis() / 1000);
                    garyx.push(floor(mouseX / 50) * 50);
                    garyy.push(floor(mouseY / 50) * 50);
                    power = 1;
                    money -= 75;
                    ponergary = false;
                }
            }

            if (ponertorre == false && ponerpatrick == false && ponerjelly == false && ponergary == false && !jelly[0] && money >= 50) {
                if (mouseX > 343 && mouseX < 450 && mouseY > 600 && mouseY < 700) {
                    estadojelly.push(1);
                    jelly.push(new Jam(mouseX, mouseY));
                    ponerjelly = true;

                    //spongetowersingle=new Bobespatula(mouseX,mouseY)
                    //placespongetower=1;
                }
            }
            if (ponerjelly == true) {
                if (mouseX > 955 && mouseX < 1045 && mouseY > 580 && mouseY < 693) {
                    //cancelarsponge=true;
                    estadojelly.pop();
                    jelly.pop();
                    ponerjelly = false;

                }
            }
            if (ponerjelly == true) {
                if (!(mouseX > 650 && mouseX < 750 && mouseY > 600 && mouseY < 700) && mapa[floor(mouseY / 50)][floor(mouseX / 50)] == 2) {
                    //placespongetower=2;
                    //spongetowersingle.fijarposicion(floor(mouseX/50)*50,floor(mouseY/50)*50);
                    //shootsponge=true;
                    for (let i = 0; i < estadojelly.length; i++) {
                        estadojelly[i] = 2;
                        //garies[i].fijarposicion(floor(mouseX / 50) * 50, floor(mouseY / 50) * 50);

                    }
                    jellytime = floor(millis() / 1000);
                    jellyx.push(floor(mouseX / 50) * 50);
                    jellyy.push(floor(mouseY / 50) * 50);
                    power = 2;
                    money -= 50;
                    ponerjelly = false;
                }
            }

            break;

        case 6:
            if (35 < mouseX && mouseX < 422 && 555 < mouseY && mouseY < 665) {
                reiniciar();
            }
            break;

        case 7:
            image(instructions1_1, 0, 0);

            if (89 < mouseX && mouseX < 213 && 619 < mouseY && mouseY < 669) {
                image(instructions1_2, 0, 0);
                pantalla = 0;
            }
            if (1027 < mouseX && mouseX < 1156 && 619 < mouseY && mouseY < 669) {
                image(instructions1_3, 0, 0);
                pantalla = 8;
            }
            break;

        case 8:
            image(instructions2_1, 0, 0);

            if (89 < mouseX && mouseX < 213 && 619 < mouseY && mouseY < 669) {
                image(instructions2_2, 0, 0);
                pantalla = 7;
            }
            if (1027 < mouseX && mouseX < 1156 && 619 < mouseY && mouseY < 669) {
                image(instructions2_3, 0, 0);
                pantalla = 9;
            }
            break;

        case 9:
            image(instructions3_1, 0, 0);

            if (89 < mouseX && mouseX < 213 && 619 < mouseY && mouseY < 669) {
                image(instructions3_2, 0, 0);
                pantalla = 8;
            }
            if (1027 < mouseX && mouseX < 1156 && 619 < mouseY && mouseY < 669) {
                image(instructions3_3, 0, 0);
                pantalla = 10;
            }
            break;

        case 10:
            image(instructions4_1, 0, 0);

            if (89 < mouseX && mouseX < 213 && 619 < mouseY && mouseY < 669) {
                image(instructions4_2, 0, 0);
                pantalla = 9;
            }
            if (1027 < mouseX && mouseX < 1156 && 619 < mouseY && mouseY < 669) {
                image(instructions4_3, 0, 0);
                pantalla = 0;
            }
            break;

    }



}


function dibujarTorre(ball) {
    if (ball) {
        if (ball instanceof Bobespatula) {
            /*fill(0, 255, 255);
            x = ball.getPosx();
            y = ball.getPosy();
            ellipse(x + 25, y + 25, ball.getTamanno(), ball.getTamanno());
            fill(255, 255, 255, 40);
            ellipse(x + 25, y + 25, 300, 300);*/
            x = ball.getPosx();
            y = ball.getPosy();
            if (y < 300) {
                image(arregloBobEsponja[cont], x, y);
                if (frameCount % 33 === 0) {
                    cont++;
                    if (cont >= 3) {
                        cont = 0;
                    }
                }
                if (money >= 150) {
                    mostrarUpGrade = true;
                }else {
                    mostrarUpGrade = false;
                }
                if (mostrarUpGrade == true) {
                    image(bobUpGrade, x - 18, y - 30);
                }else {
                image(upGradeBlock, x - 18, y - 30);
                }
            } else {
                image(arregloBobEsponjaAtras[contbob], x, y);
                if (frameCount % 33 === 0) {
                    contbob++;
                    if (contbob >= 3) {
                        contbob = 0;
                    }
                }
                if (money >= 150) {
                    mostrarUpGrade = true;
                }else {
                    mostrarUpGrade = false;
                }
                if (mostrarUpGrade == true) {
                    image(bobUpGrade, x - 18, y - 30);
                }else {
                image(upGradeBlock, x - 18, y - 30);
                }
            }
           /* fill(255, 255, 255, 40);
            ellipse(x + 25, y + 25, 300, 300);*/
        }
        if (ball instanceof Patrickjellyfisher) {
            /*fill(255, 69, 0);
            x = ball.getPosx();
            y = ball.getPosy();
            ellipse(x + 25, y + 25, ball.getTamanno(), ball.getTamanno());
            fill(255, 255, 255, 40);
            ellipse(x + 25, y + 25, 300, 300);*/
            x = ball.getPosx();
            y = ball.getPosy();
            if (y < 300) {
                image(arregloPatrick[contpatrick], x, y);
                if (frameCount % 53 === 0) {
                    contpatrick++
                    if (contpatrick >= 3) {
                        contpatrick = 0;
                    }
                }
                if (money >= 150) {
                    mostrarUpGrade = true;
                }else {
                    mostrarUpGrade = false;
                }
                if (mostrarUpGrade == true) {
                    image(bobUpGrade, x - 18, y - 30);
                }else {
                image(upGradeBlock, x - 18, y - 30);
                }
            } else {
                image(arregloPatrickAtras[contPatrickAtras], x, y);
                if (frameCount % 33 === 0) {
                    contPatrickAtras++;
                    if (contPatrickAtras >= 3) {
                        contPatrickAtras = 0;
                    }
                }
                if (money >= 150) {
                    mostrarUpGrade = true;
                }else {
                    mostrarUpGrade = false;
                }
                if (mostrarUpGrade == true) {
                    image(bobUpGrade, x - 18, y - 30);
                }else {
                image(upGradeBlock, x - 18, y - 30);
                }
            }
            /*fill(255, 255, 255, 40);
            ellipse(x + 25, y + 25, 300, 300);*/
        }

    }

}

function dibujarPreTorre(ball) {
    if (ball) {
        if (mouseX > 0 && mouseX < 1200 && mouseY > 0 && mouseY < 700) {

            if (ball instanceof Bobespatula) {
                if (mapa[floor(mouseY / 50)][floor(mouseX / 50)] == 2) {
                    x = ball.getPosx();
                    y = ball.getPosy();
                    image(preBobRojo, x - 25, y - 25)
                } else {
                    x = ball.getPosx();
                    y = ball.getPosy();
                    image(preBob, x - 25, y - 25);
                }
                /*x = ball.getPosx();
                y = ball.getPosy();
                image(preBob, x-25, y-25);*/
                /*fill(255, 255, 255, 40);
                ellipse(x, y, 300, 300);*/
            }
            if (ball instanceof Patrickjellyfisher) {
                if (mapa[floor(mouseY / 50)][floor(mouseX / 50)] == 2) {
                    x = ball.getPosx();
                    y = ball.getPosy();
                    image(prePatrickRojo, x - 25, y - 25);

                } else {
                    x = ball.getPosx();
                    y = ball.getPosy();
                    image(prePatrick, x - 25, y - 25);

                }
               /* fill(255, 255, 255, 40);
                ellipse(x, y, 300, 300);*/
            }
        }
    }
}

function dibujarGary(gary) {
    if (gary) {


        x = gary.getPosx();
        y = gary.getPosy();


        fill(0, 255, 255, 50);
        noStroke();
        ellipse(gary.getPosx() + 25, gary.getPosy() + 50, 175, 175);
        image(garyStop, x, y + 25);
    }

}

function dibujarPregary(gary) {
    if (gary) {
        if (mouseX > 0 && mouseX < 1200 && mouseY > 0 && mouseY < 700) {
            x = floor(mouseX / 50) * 50;
            y = floor(mouseY / 50) * 50;
            fill(20, 255, 255, 50);
            noStroke();
            ellipse(x + 25, y + 50, 175, 175);
            if (mapa[floor(mouseY / 50)][floor(mouseX / 50)] != 2) {
                x = floor(mouseX / 50) * 50;
                y = floor(mouseY / 50) * 50;

                image(preGaryRojo, x, y + 25);
            } else {
                x = floor(mouseX / 50) * 50;
                y = floor(mouseY / 50) * 50;
                image(preGary, x, y + 25);
            }




        }
    }
}

function dibujarJelly(jam) {
    if (jam) {

        if (jam) {

            x = jam.getPosx();
            y = jam.getPosy();
            image(exploJam[contJam], x - 50, y - 50);
            if (frameCount % 20 === 0) {
                contJam++;
                if (contJam >= 2) {
                    contJam = 0;
                }
            }

        }
    }

}

function dibujarPrejelly(jam) {
    if (jam) {
        if (mouseX > 0 && mouseX < 1200 && mouseY > 0 && mouseY < 700) {

            x = floor(mouseX / 50) * 50;
            y = floor(mouseY / 50) * 50;
            fill(255, 0, 255, 33);
            noStroke();
            ellipse(x + 25, y + 50, 175, 175);

            if (mapa[floor(mouseY / 50)][floor(mouseX / 50)] != 2) {
                x = floor(mouseX / 50) * 50;
                y = floor(mouseY / 50) * 50;
                image(preJamRojo, x, y + 25);
            } else {
                x = floor(mouseX / 50) * 50;
                y = floor(mouseY / 50) * 50;
                image(preJam, x, y + 25);
            }

        }
    }
}

function dibujarPlankton(malo) {
    //fill(27, 85, 76);
    x = malo.getPosx();
    y = malo.getPosy();
    if (malo instanceof Plankton) {
        image(arregloPlanckton[contPlanckton], x, y);
        if (frameCount % 8 === 0) {
            contPlanckton++;
            if (contPlanckton >= 2) {
                contPlanckton = 0;
            }
        }

        //ellipse(x + 25, y + 25, malo.getTamanno(), malo.getTamanno());
    }

    if (malo instanceof Bigplankton) {
        image(arregloSuperPlankton[contSuper], x - 25, y - 30);
        if (frameCount % 8 === 0) {
            contSuper++;
            if (contSuper >= 2) {
                contSuper = 0;
            }
        }
    }
}

function lastimar(plankton, disparo) {

    if (disparo instanceof Projectile) {

        if (dist(plankton.getPosx(), plankton.getPosy(), disparo.getPosx(), disparo.getPosy()) < 20) {
            removeps = true;

        }

    }

    if (disparo instanceof Projectilepatrick) {

        if (dist(plankton.getPosx(), plankton.getPosy(), disparo.getPosx(), disparo.getPosy()) < 20) {
            removepp = true;

        }

    }

}


function garyBlock(plank, gary) {

    if (dist(plank.getPosx(), plank.getPosy(), gary.getPosx(), gary.getPosy() + 25) < 75) {
        /*fill(255,33);
        ellipse(gary.getPosx()+25, gary.getPosy()+50,150,150);*/
        //console.log('yes');
        return true;
    } else {
        // console.log('no');
        return false;
    }

}

function jellySlow(plank, jam) {

    if (dist(plank.getPosx(), plank.getPosy(), jam.getPosx(), jam.getPosy() + 25) < 75) {
        /*fill(255,33);
        ellipse(gary.getPosx()+25, gary.getPosy()+50,150,150);*/
        //console.log('yes');
        return true;
    } else {
        //console.log('no');
        return false;
    }

}


function dannoKrusty(planks) {


    if (planks) {
        if (dist(planks.getPosx(), planks.getPosy(), 1100, 275) < 100) {
            // console.log('yes');
            return true;
        } else {
            //console.log('no');

            return false;
        }
    }

}


function reiniciar() {

    pantalla = 0;
    vel = createVector(0.5, 0);
    plank1 = new Plankton(50, 275);
    loc = createVector(plank1.getPosx(), plank1.getPosy());
    spongetower = [];
    estadospongetower = [];
    torresx = [];
    torresy = [];
    dispararesponja = [];

    patricktower = [];
    estadopatricktower = [];
    patrickx = [];
    patricky = [];
    planktons=[];
    projectiles = [];
    projectilespatrick = [];
    tamCuad = 50;
    posx = 0;
    posy = 0;

    shootsponge = false;
    shootsponges = [];
    shootpatricks = [];
    targetsponge = [];
    targetpatrick = [];
    planktons = []

     fireratesponge = [];
    damageboostsponge = [];
    fireratepat = [];
    damageboostpat = [];
    ponertorre = false;
    ponerpatrick = false;
    cancelarsponge = false;
    rangespongeshoot = false;
    rangepatshoot = false;
    removepp = false;
    removeps = false;
    dannoesponja = 0.25;
    dannopatrick = 0.5;
    ponergary = false;
    garies = [];
    estadogary = [];
    garyx = [];
    garyy = [];
    eliminargary = false;
    ponerjelly = false;
    jelly = [];
    estadojelly = [];
    jellyx = [];
    jellyy = [];
    eliminarjelly = false;
    power = 1;
    money = 400;
    earnings = 0;
    addmin = false;
    min = 0;
    krustykrabhealth =122;

    spawnplankbig = 1000;
    spawnplank = 300;
    subspawn = false;
    subspawnbig = false;
    youlose = false;

    //animacion bob
    cont = 0;
    contbob = 0;

    //animacion Patrick
    contpatrick = 0;
    contPatrickAtras = 0;

    //animacion Planckton
    contPlanckton = 0;
    contSuper = 0;

    //Suma dinero
    contDiez = 0;
    mostrarDinero = false;
    mostrarMasDinero = false;
    contVenticinco = 0;

    contJam = 0;





}



