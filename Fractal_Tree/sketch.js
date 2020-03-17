class Branch{
  constructor(begin,end,length){
    this.begin=begin.copy();
    this.end=end.copy();
    this.length=length;
    this.segment=false;
    this.draw=false;
  }
  generate(){
    this.segment=true;
    this.dir=p5.Vector.sub(this.end,this.begin);
    
    var temp1=this.dir.copy();
    temp1.rotate(angle.value());
    temp1.mult(0.67);
    var temp1_end=p5.Vector.add(this.end,temp1);
    
    var temp2=this.dir.copy();
    temp2.rotate(-PI/4);
    temp2.mult(0.67);
    var temp2_end=p5.Vector.add(this.end,temp2);
    
    var gen1=new Branch(this.end,temp1_end,this.length*0.67);
    var gen2=new Branch(this.end,temp2_end,this.length*0.67);
    
    var temp=[];
    temp.push(gen1);
    temp.push(gen2);
    return temp;
  }
  show(){
    this.draw=true;
    stroke(165,42,42);
    line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  }
}
/***************************************************/
var _root,root;
var len=100;
var branch=[];
var len_count=100;
var angle;
var leaf_nodes=[];
var thres=false; 

function mousePressed(){
  if(len_count<30){
    thres=true;
    return;
  }
  len_count*=0.67;
  for(var x=branch.length-1;x>=0;x--){
    // console.log(x,x,)
    if(!branch[x].segment){
      var seg=branch[x].generate();
      for(var y of seg){
        branch.push(y);
      }
    }
  }
}

function drawLeaves(arr){
  noStroke();
  fill(0,155,0,100)
  for(var ar of arr){
    ellipse(ar.end.x,ar.end.y,20,8,);
  }
}

var angle;

function setup() {
  createCanvas(400, 400);
  root_begin=createVector(width/2,height);
  root_end=createVector(width/2,height-len);
  node = new Branch(root_begin,root_end,len);
  branch.push(node);
  strokeWeight(4);
  angle=createSlider(0,PI/2,1,0.001);
}

function draw() {
  background(0,250,255);
  stroke(165,42,42);
  
  for(x of branch){
    if(thres){
      if(!x.segment){
        leaf_nodes.push(x);
      }
    }
    x.show();
    if(thres){
      drawLeaves(leaf_nodes);
    }
    // noLoop();
  }
}
