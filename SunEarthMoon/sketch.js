let e,m;
function setup() {
  createCanvas(400, 400);
  e=createVector(100,0);
  m=createVector(40,0);
}
function draw() {
  background(0);
  translate(width/2,height/2);
  fill(255,50,0);
  circle(0,0,80);
  fill(0,150,255);
  circle(e.x,e.y,40);
  fill(200);
  push();
  translate(e.x,e.y);
  circle(m.x,m.y,10);
  m.rotate(0.09);
  pop();
  e.rotate(0.04);
}