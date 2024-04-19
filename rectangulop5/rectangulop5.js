let r = 0;
let g = 0;
let b = 0;
function setup(){
  createCanvas(800,600);
}

function draw(){
  background(240,240,255);
  noStroke();
  rect(300,200, 200,125);
  fill(r,g,b);
  delay(2000);
  r = int(random(0,255));
  g = int(random(0,255));
  b = int(random(0,255));
}
