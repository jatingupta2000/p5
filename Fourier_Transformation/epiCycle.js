function epiCycle(x,y,rotation,fourier){
  for(var temp=1;temp<fourier.length;temp++){
    prevx=x;
    prevy=y;
    radius=fourier[temp].amp;
    freq=fourier[temp].freq;
    phase=fourier[temp].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);
    stroke(255);
    strokeWeight(1);
    noFill();
    ellipse(prevx,prevy,2*radius);
    line(prevx,prevy,x,y);
    strokeWeight(8);
    point(0,0);
    point(x,y);
  }
  return createVector(x,y);
}