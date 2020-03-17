var rCount=0;
var bCount=0;

class Car{
  constructor(x,y,clr){
    this.x=x;
    this.y=y;
    this.clr=clr;
    if(clr==1){
      image(redCar,this.x,this.y);
      this.width=redCar.width;
      this.height=redCar.height;
    }
    if(clr==2){
      image(blueCar,this.x,this.y);
      this.width=blueCar.width;
      this.height=blueCar.height;
    }
  }
  
  update(x){
    if(x==0){
      if(this.clr==1){
        image(redCar,this.x,this.y);
      }
      if(this.clr==2){
        image(blueCar,this.x,this.y);
      }
      return;
    }
    if(this.clr==1){
      if(rCount%2==0){
        this.x=-3*width/16-this.width/2;
        image(redCar,this.x,this.y);
      }
      else{
        this.x=-width/16-this.width/2;
        image(redCar,this.x,this.y);
      }
      rCount++;
    }
    if(this.clr==2){
      if(bCount%2==0){
        this.x=width/16-this.width/2;
        image(blueCar,this.x,this.y);
      }
      else{
        this.x=3*width/16-this.width/2;
        image(blueCar,this.x,this.y);
      }
      bCount++;
    }
  }
}