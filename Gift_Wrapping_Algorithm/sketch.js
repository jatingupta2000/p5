const points=[];
const hull=[];

let leftMost;
let currentVertex;
let index;
let nextVertex;
let nextIndex=-1;

function setup() {
  createCanvas(500, 500);
  let buffer =5;
  for(let i=0;i<50;i++){
    points.push(createVector(random(buffer,width-buffer),random(buffer,height-buffer)));
  }
  points.sort((a,b)=>a.x-b.x);
  leftMost=points[0];
  currentVertex=leftMost;
  nextVertex=points[1];
  hull.push(currentVertex);
  index=2;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(8);
  for(let p of points){
    point(p.x,p.y);
  }
  
  stroke(255,250,50);
  fill(255,0,0,50);
  strokeWeight(4);
  beginShape();
  for(let p of hull){
    vertex(p.x,p.y);
  }
  endShape(CLOSE);
  
  stroke(255,0,0);
  point(leftMost.x,leftMost.y);
  stroke(0,255,0);
  point(currentVertex.x,currentVertex.y);
  stroke(255,255,0);
  point(nextVertex.x,nextVertex.y);
  
  stroke(255,50,0);
  strokeWeight(2);
  line(currentVertex.x,currentVertex.y,nextVertex.x,nextVertex.y);
  
  stroke(250);
  let checking=points[index];
  line(currentVertex.x,currentVertex.y,checking.x,checking.y);
  
  const a=p5.Vector.sub(nextVertex,currentVertex)
  const b=p5.Vector.sub(checking,currentVertex)
  const Cross=a.cross(b);
  
  if(Cross.z<0){
    nextVertex=checking;
    nextIndex=index;
  }
  index++;
  
  if(index==points.length){
    if(nextVertex==leftMost){
      noLoop();
    }
    hull.push(nextVertex);
    currentVertex=nextVertex;
    index=0;
    points.splice(nextIndex,1);
    nextVertex=leftMost;
  }
  frameRate(100)
}