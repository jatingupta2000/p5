var maxiteration=1000;
var iteration=0;
var aa,bb,ca,cb;
var minSlider,maxSlider;


function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  background(0);
  
  var ca = map(mouseX,0,width,0,1);
  var cb = map(mouseY,0,height,0,1);
  // var ca=-0.8;
  // var cb=0.156;
  
  for(let y=0;y<height;y++){
    for(let x=0;x<width;x++){
      
      var a=map(x,0,width,-2,2);
      var b=map(y,0,height,-2,2);
      
      iteration=0;
      while(iteration<maxiteration){
        aa=a*a-b*b;
        bb=2*a*b;
        a=aa+ca;
        b=bb+cb;
        
        if(aa+bb>20){
          break;
        }
        
        iteration++;
      }
      var bright=map(iteration,0,maxiteration,0,1);
      bright_red_green=map(sqrt(bright),0,1,0,255);
      bright_blue=map(sqrt(bright),0,1,77,255);
      if(iteration==maxiteration){
         bright_red_green=0;
        bright_blue=0;
      }
         
      pix=(x+y*width)*4;
      pixels[pix+0]=bright_red_green;
      pixels[pix+1]=bright_red_green;
      pixels[pix+2]=bright_blue;
      pixels[pix+3]=255;
    }
  }
  
  updatePixels();
  frameRate(100);
  // noLoop();
}