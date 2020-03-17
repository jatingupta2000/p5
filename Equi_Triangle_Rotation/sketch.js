var radius;
var tri_no =250;
var x,y,angle,pos;
var time = 0;

function equilateral(length,pos,time){
  var height = sqrt(3) * length / 2;
  var v1 = createVector(pos.x - length / 2,pos.y - height /3);
  var v2 = createVector(pos.x + length / 2,pos.y - height /3);
  var v3 = createVector(pos.x,pos.y + 2 * height /3);
  v1=p5.Vector.sub(v1,pos);
  v2=p5.Vector.sub(v2,pos);
  v3=p5.Vector.sub(v3,pos);
  push();
  translate(pos.x,pos.y);
  v1.rotate(time);
  v2.rotate(time);
  v3.rotate(time);
  line(v1.x,v1.y,v2.x,v2.y);
  line(v2.x,v2.y,v3.x,v3.y);
  line(v3.x,v3.y,v1.x,v1.y);
  pop();
}


function setup() {
  createCanvas(screen.width, screen.height);
  radius = width/8;
  fullscreen(true);
  colorMode(HSB);
}

function draw() {
  translate(width/2,height/2);
  background(0);
  stroke(255,0,0);
  strokeWeight(1);
  for(var i=0;i<tri_no;i++){
    angle = map(i,0,tri_no,0,TWO_PI);
    var colr = map(i,0,tri_no,0,255*2);
    x = radius * cos(angle);
    y = radius * sin(angle);
    point(x,y);
    pos = createVector(x,y);
    stroke(colr,255,255);
    equilateral(screen.width/8,pos,time);
  }
  
  dt = 5/tri_no;
  time+=dt;
  // frameRate(1);
}