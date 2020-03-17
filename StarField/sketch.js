var r;
var speed;

function Star(){
  this.x=random(-width,width);
  this.y=random(-height,height);
  this.z=random(width);
  this.pz=this.z;
  
  this.update=function(){
    this.z=this.z-speed;
    if (this.z <1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }
  this.show=function(){
    fill(255);
    noStroke();
    r=map(this.z,0,width,16,0);
    
    var sx=map(this.x/this.z,0,1,0,width);
    var sy=map(this.y/this.z,0,1,0,height);
    
    
    var px=map(this.x/this.pz,0,1,0,width);
    var py=map(this.y/this.pz,0,1,0,height);
    
    ellipse(sx,sy,r,r);
    stroke(255);
    noFill();
    
    this.pz=this.z;
    
    line(px,py,sx,sy);
  }
}

var star=[];

function setup() {
  createCanvas(screen.width, screen.height);
  for(let i=0;i<1800;i++){
    star[i]=new Star();
  }
}

function draw() {
  background(0,0,0);
  speed=map(mouseX,0,width,0,50);
  translate(width/2,height/2);
  for(let i=0;i<star.length;i++){
    star[i].update();
    star[i].show();
  }
}