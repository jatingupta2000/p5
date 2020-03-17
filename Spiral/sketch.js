var points=[];
var p,r=100,t=0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  p=[r*cos(t),r*sin(t)];
  points.push(p);
  background(0);
  stroke(255);
  strokeWeight(1);
  translate(width/2,height/2);
  noFill();
  beginShape();
  for(var i=0;i<points.length;i++){
    vertex(points[i][0],points[i][1]);
  }
  endShape();
  t+=0.1;
  if(r>0){
  r-=0.1;}
}