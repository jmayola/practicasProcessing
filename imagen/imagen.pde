PImage bg;
int y = 0;
int x = 0;

void setup() {
  size(300, 300);
  // The background image must be the same size as the parameters
  // into the size() method. In this program, the size of the image
  // is 640 x 360 pixels.
  bg = loadImage("/home/mayola/Imágenes/maquinasvg.jpg");
}
void draw() {
  background(255,255,255);
    noStroke();

  image(bg, x, y);
}
void keyPressed(){
  if(key == 'a'){
    x--;  
  }
  if(key == 'd'){
    x++;  
  }
  if(key == 's'){
    y++;  
  }
  if(key == 'w'){
    y--;  
  }
}
