function DFT(path){
  var N=path.length;
  var amp,freq,phase;
  var transform=[];
  for(var k=0;k<N;k++){
    var re=0;
    var im=0;
    for(var n=0;n<N;n++){
      re += path[n] * cos(TWO_PI * k * n / N);
      im -= path[n] * sin(TWO_PI * k * n / N);
    }
    re/=N;
    im/=N;
    amp=sqrt(re * re + im * im);
    freq=k;
    phase=atan2(im,re);
    transform[k]={re,im,amp,freq,phase};
  }
  return transform;
}