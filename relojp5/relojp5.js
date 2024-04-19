let z = 0;
let nz = 5;
let xz = -5;
let x = 200;
function setup(){
  createCanvas(400,400);
}
function draw(){
  background(255,255,255);
line(200,200, z, x);
   if(z < 0 || z > 400){
   nz = nz * (-1);
  }
  if(x < 0 || x > 400){
   xz = xz * (-1);
  }
  z = z + nz;
  x = x + xz;
}
