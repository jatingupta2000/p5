//  Fourier Series
var time=0;
var wave=[];
var x,y,prevx,prevy,radius;
var xCoor=[];
var yCoor=[];

function setup() {
  createCanvas(screen.width, screen.height);
  fullscreen(true);
  for(var i=0;i<100;i++){
    var angle=map(i,0,100,0,TWO_PI);
    xCoor[i]=100*cos(angle);
    yCoor[i]=100*sin(angle);
  }
  fourierX=DFT(xCoor);
  fourierY=DFT(yCoor);
}

function draw() {
  background(0);
  translate(0,0);
  
  vX = epiCycle(width/2+100,50,0,fourierX);
  vY = epiCycle(100,height/2+100,HALF_PI,fourierY);
  var v=createVector(vX.x,vY.y);
  wave.unshift(v);
  
  // Printing Wave
  strokeWeight(8);
  stroke(255,255,0);
  strokeWeight(8);
  point(v.x,v.y);
  
  strokeWeight(1);
  stroke(255);
  line(vX.x,vX.y,v.x,v.y);
  line(vY.x,vY.y,v.x,v.y);
  
  beginShape();
  stroke(255,255,0);
  for(var p=0;p<wave.length;p++){
    vertex(wave[p].x,wave[p].y);
  }
  endShape();
  
  const dt = TWO_PI / fourierX.length;
  time += dt;
  if (time > TWO_PI) {
    time = 0;
    wave=[];
  }
}