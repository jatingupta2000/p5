class Particle{
  constructor(rad){
    this.x=height/2;
    this.y=random(5);
    this.r=3;
    this.finish=false;
  }
  
  intersect(){
    for(var i of snowflakes){
      var distance=dist(this.x,this.y,i.x,i.y);
      if(distance<2*this.r){
        return true;
      }
    }
    return false;
  }
  
  update(){
    this.x--;
    this.y+=random(-1,1);
    
    let angle=atan(this.y/this.x);
    angle = constrain(angle, 0, PI/6);
  }
  
  show(){
    noStroke();
    ellipse(this.x,this.y,2*this.r,2*this.r);
  }
  
  finished(){
    if(this.x<1){
      this.finish=true;
    }
    return this.finish;
  }
}

var snow;
var snowflakes=[];

function setup() {
  createCanvas(screen.width, screen.height);
  fullscreen(true);
  snow=new Particle();
}

function draw() {
  background(0);
  translate(width/2,height/2);
  rotate(PI/6);
  
  var count=0;
  while(!snow.finished() && !snow.intersect()){
    snow.update();
    count++;
  }
  
  if(count==0){
    noLoop();
  }
  
  snowflakes.push(snow);
  snow=new Particle();

  for(var i=0;i<6;i++){
    rotate(PI/3);
    for(var p of snowflakes){
      var distance=dist(0,0,p.x,p.y);
      var clr=map(distance,0,height/2,255,0);
      fill(255,clr,0);
      p.show();
    }
    push();
    scale(1,-1);
    for(var p of snowflakes){
      var distance=dist(0,0,p.x,p.y);
      var clr=map(distance,0,height/2,255,0);
      fill(255,clr,0);
      p.show();
    }
    pop();
  
  }
}