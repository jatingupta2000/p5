function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(25,25,25);
  translate(width/2,height/2);
  stroke(255,255,0);
  strokeWeight(0.5);
  for(var i=-width/2;i<width/2;i+=0.5){
    var r=random(-100,100);
    var n=noise(i);
    scale(1,-1);
    line(i,0,i,r*n);
    scale(1,-1);
    line(i,0,i,r*n);
  }
  frameRate(10);
}