var points;
var pin=[];
var factor=0;
var ang,radius,points_sli;

function getVector(index,total){
  var angle = map(index%total,0,total,0,TWO_PI);
  var v=p5.Vector.fromAngle(angle + PI);
  v.mult(radius);
  return v;
}

function setup() {
  createCanvas(screen.width, screen.height);
  fullscreen(true);
  font=loadFont('font.otf');
  radius=height/2-30;
  textFont(font);
  points_sli=createSlider(0,1000);
  points_sli.position(50,height/4);
}

function draw() {
  background(255);
  points=points_sli.value();
  fill(0);
  textSize(50);
  textAlign(LEFT);
  text('Factor  : '+factor,50,100);
  text('Points  : '+points,50,180);
  translate(width/2,height/2);
  stroke(255);
  strokeWeight(8);
  
  for(var j=0;j<points;j++){
    var a = getVector(j,points);
    var b = getVector(j*factor,points);
    stroke(255,165,0);
    strokeWeight(4);
    line(a.x,a.y,b.x,b.y);
  }
  factor+=0.1;
  frameRate(10);
}