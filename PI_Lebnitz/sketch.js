var iteration=0;
var denominator;
var PI_calc=1;
var term;
var points=[];
var segment,spacing;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  denominator=2*iteration+3;
  term=1/denominator;
  if(iteration%2==0){
    PI_calc-=term;
  }
  else{
    PI_calc+=term;
  }
  points.push(PI_calc*4);
  spacing=width/points.length;
  iteration++;
  
  stroke(255);
  strokeWeight(1);
  noFill();
  line(0,map(PI,2,4,0,height),width,map(PI,2,4,0,height))
  beginShape();
  for(var i=0;i<points.length;i++){
    x=i*spacing;
    y=map(points[i],2,4,0,height);
    console.log(points[i]);
    vertex(x,y);
  }
  endShape();
  frameRate(50);
}