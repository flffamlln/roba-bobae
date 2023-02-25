var mode = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (mode == 0) {
    screen1();
  } else if (mode == 1) {
    screen2();
  } else if (mode == 2) {
    screen3();
  }
  
}

//Useful to have multiple elements on one screen
function screen1() {
  // Home Screen
  noStroke();
  fill('#F1DFEC');
  rectMode(CENTER);
  rect(width/2, height/2, 500, 600, 15);
}

function screen2() {
  rect(50, 50, 300, 300);
}

function screen3() {
  line(0, 0, windowWidth, windowHeight);
  line(0, windowWidth, windowWidth, 0);
}


//Method 1: More flexible, any order
function mousePressed() {
  if (mode == 0) {
    mode = 1;
  } else if (mode == 1) {
    mode = 2;
  } else if (mode == 2) {
    mode = 0;
  }
}

//Method 2: Can only go in order
// function mousePressed(){
//   mode=mode+1;
//   if (mode==3) {
//     mode=0;
//   }
//   print(mode);