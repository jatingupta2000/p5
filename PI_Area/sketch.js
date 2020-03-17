let points=[];
let point_square=0;
let point_circle=0;
let distance;

function setup() {
  createCanvas(400, 400);
  points.push(createVector(random(0,width),random(0,height)));
}

function draw() {
  background(0,0,255);
  stroke(255,0,0);
  strokeWeight(5);
  fill(255,0,0,200)
  ellipse(width/2,height/2,400,400);
  for(let i=0;i<100;i++){
    stroke(255,0,0);
    strokeWeight(10);
    points.push(createVector(random(0,width),random(0,height)));
    for(let p of points){
      distance=sqrt((width/2-p.x)*(width/2-p.x)+(height/2-p.y)*(height/2-p.y));
      if(distance<200){
        stroke(255,0,0);
        point(p.x,p.y);
        point_circle++;
      }
      else{
        stroke(0,255,255);
        point(p.x,p.y);
        point_square++;
      }
    }
  }
    console.log(point_circle*4/(point_square+point_circle));
  frameRate(200);
}
