function setup() {

  createCanvas(500, 500);
  background(131, 182, 208);
  
  let cloud = color(230, 230, 230);

  fill(153, 153, 183);
  noStroke();

  //mountain
  beginShape();
  vertex(0, height);
  vertex(width * 0.2, height * 0.4);
  vertex(width * 0.35, height * 0.6);
  vertex(width * 0.50, height * 0.2);
  vertex(width * 0.70, height * 0.5);
  vertex(width * 0.85, height * 0.3);
  vertex(width, height);
  endShape();

  noLoop();
    
  //clouds
  fill(cloud);
  ellipse(10, 50, 400, 100);
  ellipse(200, 50, 200, 100);
  ellipse(300, 50, 200, 100);
  ellipse(400, 50, 200, 100);
  ellipse(450, 50, 200, 100);
  
  cloud.setAlpha(128);
  
  fill(cloud);
  ellipse(100, 100, 200, 100);
  ellipse(200, 100, 200, 100);
  ellipse(300, 100, 200, 100);
  ellipse(400, 100, 200, 100);
  ellipse(500, 100, 200, 100);
  
  //peaks
  fill(234, 234, 251);
  triangle(100, 200, 75, 270, 155, 270);
  triangle(80, 300, 75, 270, 155, 270);
  triangle(120, 300, 75, 270, 155, 270);
  triangle(150, 300, 75, 270, 155, 270);
  
  fill(234, 234, 251);
  triangle(250, 100, 220, 180, 305, 180);
  triangle(230, 200, 220, 180, 305, 180);
  triangle(250, 200, 220, 180, 305, 180);
  triangle(270, 200, 220, 180, 305, 180);
  triangle(290, 200, 220, 180, 305, 180);
  
  fill(234, 234, 251);
  triangle(425, 145, 350, 250, 447, 250);
  triangle(445, 280, 350, 250, 447, 250);
  triangle(405, 280, 350, 250, 447, 250);
  triangle(365, 280, 350, 250, 447, 250);

  //avalanche
  for( var x = 110; x < width ; x = x+100){
    for (var y = 360 ; y < height ; y = y+10){
       fill(229, 229, 255);
       ellipse(x, y, 120, 50);
    }
  }
  
  fill(204, 204, 255);
  ellipse(90, 350, 200, 100);
  ellipse(200, 350, 200, 100);
  ellipse(300, 350, 200, 100);
  ellipse(400, 350, 200, 100);
  ellipse(450, 350, 200, 100);
  
}