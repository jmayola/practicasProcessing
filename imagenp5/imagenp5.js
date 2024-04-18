let bg;
let y = 0;
let izq = false
let der = false
let arriba = false
let abajo = false
let x = 0;
function setup() {
  createCanvas(300, 300);
  bg = loadImage("maquinasvg.jpg");
}
function draw() {
  background(255,255,255);
    noStroke();
  image(bg, x, y);
  if( izq == true){
    x--
  }
  if(der == true){
    x++;  
  }
  if(abajo == true){
    y++;  
  }
  if(arriba == true){
    y--;  
  }
}
function keyPressed(){
  if(key == 'a'){
    izq = true
  }
  if(key == 'd'){
    der = true

  }
  if(key == 's'){
    abajo = true  
  }
  if(key == 'w'){
    arriba = true
  }
}
function keyReleased(){
  if(key == 'a'){
    izq = false
  }
  if(key == 'd'){
    der = false

  }
  if(key == 's'){
    abajo = false  
  }
  if(key == 'w'){
    arriba = false
  }

}
