class Obstacle{
  constructor(x,y,clr){
    this.appear=true;
    this.x=x;
    this.y=y;
    this.clr=clr;
    if(this.clr==1){
      image(redSquare,this.x,this.y);
    }
    if(this.clr==2){
      image(blueSquare,this.x,this.y);
    }
  }
  update(speed){
    if(this.appear){
      if(this.y<-this.height){
        return;
      }
      this.y-=speed;
      if(this.clr==1){
        image(redSquare,this.x,this.y);
        this.width=redSquare.width;
        this.height=redSquare.height;
      }
      if(this.clr==2){
        image(blueSquare,this.x,this.y);
        this.width=blueSquare.width;
        this.height=blueSquare.height;
      }
    }
  }
  
  intersect(cars){
    if((this.y-cars.y<=cars.height) && (this.x+this.width/2==cars.x+cars.width/2)){
      return true;
    }
    return false;
  }
}