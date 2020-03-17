class Segment{
  constructor(a,b) {
    this.a=a.copy();
    this.b=b.copy();
  }
  
  generate(){
    let children=[];
    
    let v=p5.Vector.sub(this.b,this.a);
    v.div(3);
    
    //Segment 0
    let b1=p5.Vector.add(this.a,v);
    children[0]=new Segment(this.a,b1);
    
    //Segment 3
    let a1=p5.Vector.sub(this.b,v);
    children[3]=new Segment(a1,this.b)
    
    v.rotate(-PI/3);
    let c=p5.Vector.add(b1,v);
    
    //Segment 1
    children[1]=new Segment(b1,c);
    
    //Segment 2
    children[2]=new Segment(c,a1);
    
    return children;
  }
  
  show(){
    line(this.a.x,this.a.y,this.b.x,this.b.y);
  }
}
/********************************************************/
var a,b;
var segments=[];

function setup() {
  createCanvas(screen.width, screen.height);
  var xc=width/2;
  var yc=height/2;
  var offset=height/4;
  
  a=createVector(xc-offset,yc-offset);
  b=createVector(xc+offset,yc-offset);
  var seg=new Segment(a,b);
  segments.push(seg);
  
  a=createVector(xc+offset,yc-offset);
  b=createVector(xc+offset,yc+offset);
  seg=new Segment(a,b);
  segments.push(seg);
  
  a=createVector(xc+offset,yc+offset);
  b=createVector(xc-offset,yc+offset);
  seg=new Segment(a,b);
  segments.push(seg);
  
  a=createVector(xc-offset,yc+offset);
  b=createVector(xc-offset,yc-offset);
  seg=new Segment(a,b);
  segments.push(seg);
}

function mousePressed(){
  stroke(255);
  let temp=[];
  for(let child of segments){
    var temp2=child.generate();
    for(let i of temp2){
      temp.push(i);
    }
  }
  segments=temp;
}

function draw() {
  background(0);
  stroke(255);
  console.log(segments.length);
  for(let child of segments){
    child.show();
  }
}