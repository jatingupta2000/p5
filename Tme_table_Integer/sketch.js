var points=250;
var pin=[];
var factor=2;
var ang,radius;

function setup() {
  createCanvas(screen.width, screen.height);
  fullscreen(true);
  font=loadFont('font.otf');
  radius=height/2-30;
  textFont(font);
}

function draw() {
  background(0);
  fill(0);
  textSize(50);
  textAlign(LEFT);
  text('Factor  : '+factor,50,100);
  translate(width/2,height/2);
  stroke(255);
  strokeWeight(8);
  
  for(var i=0;i<points;i++){
    ang=map(i,0,points,0,TWO_PI);
    x = radius * cos(ang + PI);
    y = radius * sin(ang + PI);
    strokeWeight(8);
   stroke(0); point(x,y);
    noFill();
    strokeWeight(1);
    circle(0,0,2*radius);
    pin[i]=createVector(x,y);
  }
  
  for(var j=0;j<points;j++){
    var other = (j * factor) % points;
    stroke(255,165,0);
    line(pin[j].x,pin[j].y,pin[other].x,pin[other].y);
  }
 factor++; 
  frameRate(1);
}