class Circle{
  constructor(x,y,clr){
    this.appear=true;
    this.x=x;
    this.y=y;
    this.clr=clr;
    if(clr==1){
      image(redCircle,this.x,this.y);
      this.width=redCircle.width;
      this.height=redCircle.height;
    }
    if(clr==2){
      image(blueCircle,this.x,this.y);
      this.width=blueCircle.width;
      this.height=blueCircle.height;
    }
  }
  update(speed){
    if(this.appear){
      if(this.y<-this.height){
        return;
      }
      this.y-=speed;
    
      if(this.clr==1){
        image(redCircle,this.x,this.y);
        this.width=redCircle.width;
        this.height=redCircle.height;
      }
      if(this.clr==2){
        image(blueCircle,this.x,this.y);
        this.width=blueCircle.width;
        this.height=blueCircle.height;
      }
    }
  }
  
  intersect(cars){
    if((this.y-cars.y<=cars.height) && (this.x+this.width/2==cars.x+cars.width/2)){
      this.appear=false;
      return true;
    }
    return false;
  }
}