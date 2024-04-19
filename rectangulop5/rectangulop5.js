let r = 255;
let g = 0;
let b = 0;
let inicio = 0;
function setup(){
  createCanvas(800,600);
}

function draw(){
  background(255,255,255);
  noStroke();
    fill(0,0,0);

  text(int(inicio)+ " frames", 300, 100);
  text("60 frames es un segundo", 300, 50);
  inicio ++;
    fill(r,g,b);
    rect(300,200, 200,125);
    if(inicio == 120){
      inicio = 0;
      
  r = int(random(0,255));
  g = int(random(0,255));
  b = int(random(0,255));
  
    }
}
