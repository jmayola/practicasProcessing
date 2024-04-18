function setup(){
    createCanvas(500, 400);
}
function draw(){
line(40, 80, 120, 80);
line(120, 80, 120, 300 );
noFill();

  beginShape();
curveVertex(40, 300);
curveVertex(40, 300);
curveVertex(80, 320);
curveVertex(120, 300);
curveVertex(120, 300);
endShape();
noFill();
  beginShape();
curveVertex(130, 80);
curveVertex(130, 80);
curveVertex(130,90);
curveVertex(140,150);
curveVertex(170,300);
curveVertex(210, 80);
curveVertex(210, 80);
endShape();
line(220,80,220,300);
line(220,300,270,300);
line(280,300, 280,80);
line(340,80, 290,300);
line(340,80, 390,300);
line(300,200, 390,200);
line(400,80, 400,300);
line(400,80, 450,300);
line(450,80, 450,300);
}
