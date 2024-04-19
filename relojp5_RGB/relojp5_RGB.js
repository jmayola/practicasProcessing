let z = 0;
let nz = 5;
let xz = -5;
let x = 200;
let r = 0;
let g = 0;
let b = 0;
function setup(){
  createCanvas(400,400);
}
function draw(){
line(200,200, z, x);
  stroke(r,g,b);
  r = int(random(0,255))
  g = int(random(0,255))
  b = int(random(0,255))
   if(z < 0 || z > 400){
   nz = nz * (-1);
  }
  if(x < 0 || x > 400){
   xz = xz * (-1);
  }
  z = z + nz;
  x = x + xz;
}
