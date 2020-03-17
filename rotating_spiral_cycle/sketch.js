var points=[];
var p,r=100,t=0;
var N=10;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  p=[r*cos(t),r*sin(t)];
  points.push(p);
  background(0);
  strokeWeight(1);
  translate(width/2,height/2);
  noFill();
  for(var j=0;j<N;j++){
    push();
    rotate(j*2*Math.PI/N);
    var hue=map(j,0,N,0,255);
    colorMode(HSB);
    stroke(hue,255,255);
    beginShape();
    for(var i=0;i<points.length;i++){
      vertex(points[i][0],points[i][1]);
    }
    endShape();
    pop();
  }
  t+=.1;
  if(r>0){
  r-=1;}
}