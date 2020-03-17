var blueCar;
var blueCircle;
var blueSquare;
var redCar;
var redCircle;
var redSquare;
var speed;
var Speed;
var circler;
var circleb;
var carr;
var carb;
var squ;
var rCircle = [];
var bCircle = [];
var rSquare = [];
var bSquare = [];
var scaleScreen;
var scSr;
var replay;
var datum = 100;
var score = 0;
var over = false;
var pauseStat = false;
var waitR = 0;
var waitB = 0;
var posB,posR;

function pause() {
  speed = 0;
  pauseStat = true;
}

function resume() {
  pauseStat = false;
}

function setup() {
  score = 0;
  var font = loadFont('font.otf');
  textFont(font);
  textSize(width / 3);
  textAlign(CENTER, CENTER);

  createCanvas(screen.width, screen.height);
  fullscreen(true);

  posR=[-3 * width / 16 - 35,-width / 16 - 35];
  posB=[3 * width / 16 - 35,width / 16 - 35];
  
  Speed = createSlider(0.5, 5, 0.7, 0.1);
  Speed.position(width / 16, 1.7 * height / 10);

  scaleScreen = createSlider(0.5, 1, 0.7, 0.1);
  scaleScreen.position(width / 16, height / 12);

  blueCar = loadImage('blueCar.png');
  blueCircle = loadImage('blueCircle.png');
  blueSquare = loadImage('blueSquare.png');
  redCar = loadImage('redCar.png');
  redCircle = loadImage('redCircle.png');
  redSquare = loadImage('redSquare.png');

  replayOver = createImg('Replay_circle.png');
  replayOver.mousePressed(replay);
  replayOver.hide();
  replayB = createImg('replay.png');
  replayB.mousePressed(replay);
  pauseB = createImg('pause.png');
  pauseB.mousePressed(pause);
  resumeB = createImg('resume.png');
  resumeB.mousePressed(resume);
  resumeB.position(28 * width / 32, 8 * height / 10);
  pauseB.position(26 * width / 32, 8 * height / 10);
  replayB.position(24 * width / 32, 8 * height / 10);

  // Cars
  carr = new Car(-3 * width / 16 - 60, datum, 1);
  carb = new Car(width / 16 - 60, datum, 2);
}

function createRedCircle(){
  return new Circle(random(posR),height/scSr, 1);
}
function createBlueCircle(){
  return new Circle(random(posB),height/scSr, 2);
}
function createRedSquare(){
  return new Obstacle(random(posR), height/scSr, 1);
}
function createBlueSquare(){
  return new Obstacle(random(posB), height/scSr, 2);
}

function draw() {
  background(15, 25, 76);
  scSr = scaleScreen.value();
  if (!pauseStat) {
    speed = Speed.value();
  }

  carr.width = redCar.width;
  carb.width = blueCar.width;
  carr.height = redCar.height;
  carb.height = blueCar.height;

  translate(width / 2, height);

  // Score
  push();
  textAlign(CENTER);
  textSize(100);
  fill(255);
  stroke(255);
  text(round(score), 20 * width / 64, -7.5 * height / 8);
  textSize(30);
  noStroke();
  text('Scale : ' + scSr * 100 + '%', -25 * width / 64, -7.5 * height / 8);
  text('Speed', -25 * width / 64, -6.8 * height / 8);
  pop();

  scale(1, -1);
  scale(scSr, scSr);

  // Road
  stroke(116, 121, 161);
  strokeWeight(3);
  line(-width / 4, 0 / scSr, -width / 4, height / scSr);
  strokeWeight(1);
  line(-width / 8, 0 / scSr, -width / 8, height / scSr);
  strokeWeight(3);
  line(0, 0 / scSr, 0, height / scSr);
  strokeWeight(1);
  line(width / 8, 0 / scSr, width / 8, height / scSr);
  strokeWeight(3);
  line(width / 4, 0 / scSr, width / 4, height / scSr);

  
  
//   // /////////////////////////////////////
  if(waitR>=random(500,800)){
    waitR=0;
    var temp=[1,2];
    var shape=random(temp);
    if(shape%2==random([0,1])){
      rCircle.push(createRedCircle());
    }
    else{
      rSquare.push(createRedSquare());
    }
  }
  if(waitB>=random(500,800)){
    waitB=0;
    var temp=[1,2];
    var shape=random(temp);
    if(shape%2==random([0,1])){
      bCircle.push(createBlueCircle());
    }
    else{
      bSquare.push(createBlueSquare());
    }
  }
//   /////////////////////////////////////
  
  
  // Upadting red car
  carr.update(0);

  // Updating blue car
  carb.update(0);

  // Updating red circle
  if(!over){
  for (var i of rCircle) {
    if (!i.intersect(carr, score) || i.y <= datum / scSr - redCircle.height / scSr) {
      i.update(speed);
    } else {
      score += 2;
    }
  }

  // Updating blue circle
  for (var i of bCircle) {
    if (!i.intersect(carb, score) || i.y <= datum / scSr - blueCircle.height / scSr) {
      i.update(speed);
    } else {
      score += 2;
    }
  }

  // Updating blue square
  for (i of bSquare) {
    if (!i.intersect(carb) || i.y <= datum / scSr - blueSquare.height / scSr) {
      i.update(speed);
    } else {
      onGameOver();
    }
  }

  // Updating red square
  for (i of rSquare) {
    if (!i.intersect(carr) || i.y < (datum - redSquare.height) / scSr) { //Datum
      i.update(speed);
    } else {
      onGameOver();
    }
  }
  }

  // Terminating Condition
  for (i of bCircle) {
    if (i.y <= 0) {
      onGameOver();
    }
  }
  for (var i of rCircle) {
    if (i.y <= 0) {
      onGameOver();
    }
  }

  // Cleaning Array
  for (i = 0; i < rCircle.length; i++) {
    if (!rCircle[i].appear) {
      rCircle.splice(i, 1);
    }
  }
  for (i = 0; i < bCircle.length; i++) {
    if (!bCircle[i].appear) {
      bCircle.splice(i, 1);
    }
  }

  ///// Cleaning of blue square is left
  for (i = 0; i < bSquare.length; i++) {
    if (!bSquare[i].y) {
      bSquare.shift();
    }
  }
  for (i = 0; i < rSquare.length; i++) {
    if (!rSquare[i].y) {
      rSquare.shift();
    }
  }

  waitR += speed;
  waitB += speed;
}

function keyPressed() {
  if (!over) {
    if (keyCode === LEFT_ARROW) {
      carr.update(1);
    } else if (keyCode === RIGHT_ARROW) {
      carb.update(1);
    }
  }
}

function onGameOver() {
  // Hiding Controllers
  replayB.hide();
  pauseB.hide();
  resumeB.hide();
  Speed.hide();
  scaleScreen.hide();
  replayOver.position(8 * width / 17, 6 * height / 10);
  replayOver.show();
  
  over = true;
  noLoop();
  background(5, 5, 5, 230);
  fill(255);
  push();
  scale(1, -1);
  textSize(50/scSr);
  textAlign(CENTER);
  text("Game Over", 0, -(28/scSr) * height / 50);
  text("Score : " + score, 0, -(24/scSr) * height / 50);
  pop();
}

function replay() {
  location.reload();
}