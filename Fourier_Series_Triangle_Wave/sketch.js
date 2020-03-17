//  Fourier Series

var time=0;
var radius=100;
var wave=[];
var x,y,prevx,prevy;;

function setup() {
  createCanvas(screen.width, screen.height);
  fullscreen(true);
}
function draw() {
  background(25,25,25);
  scale(0.8,0.8);
  translate(250,height/2);
  x=0;
  y=0;
  for(var temp=0;temp<100;temp++){
    var n=temp+1;
    prevx=x;
    prevy=y;
    x += radius * pow(-1,n) * (2/PI) * (cos(n*time)/n);
    y += radius * pow(-1,n) * (2/PI) * (sin(n*time)/n);
    stroke(255);
    strokeWeight(1);
    noFill();
    ellipse(prevx,prevy,2*radius*2/(PI*n));
    line(prevx,prevy,x,y);
    strokeWeight(8);
    point(0,0);
    point(x,y);
  }
  wave.push(y);
  
  // Printing Wave
  wave.reverse();
  strokeWeight(1);
  line(x,y,200,wave[0]);
  beginShape();
  stroke(255,255,0);
  for(var p=0;p<wave.length;p++){
    vertex(p+200,wave[p]);
  }
  endShape();
  
  //Array Length Restriction
  if(wave.length>1000){
    wave.pop();
  }
  wave.reverse();
  time+=-0.01;
}