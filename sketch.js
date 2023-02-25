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
    homeScreen();
  } else if (mode == 1) {
    screen2();
  } else if (mode == 2) {
    screen3();
  }
  
}

// Useful to have multiple elements on one screen
// Home Screen
function homeScreen() {
  // Menu Box
  noStroke();
  fill('#F1DFEC');
  rectMode(CENTER);
  rect(width/2, height/2, 500, 650, 15);

  // Roba-boba Logo
  strokeWeight(5);
  stroke(255);
  fill('#826464');
  textSize(64);
  text('roba-boba', width/2, height/2 - 150);
  textAlign(CENTER);

  // Play Button Box
  strokeWeight(10);
  stroke(255);
  fill('#EDEAF5');
  rect(width/2, height/2 - 50, 300, 70, 15);

  // Play Button Text
  strokeWeight(5);
  stroke(255);
  fill(0);
  textSize(30);
  text('Play', width/2, height/2 - 40);
  textAlign(CENTER);

  // Scoreboard Button Box
  strokeWeight(10);
  stroke(255);
  fill('#EDEAF5');
  rect(width/2, height/2 + 150, 300, 260, 15);

  // Scoreboard Text 
  strokeWeight(5);
  stroke(255);
  fill(0);
  textSize(30);
  text('Scoreboard', width/2, height/2 + 70);
  textAlign(CENTER); 
  
  // Scoreboard Background Dark Stripes
  for(let i = 0; i < 6; i++){
    if(i % 2 != 0){
      strokeWeight(0);
      fill('#DED5F5');
      rect(width/2, height/2 + 75 + i * 30, 290, 30);
    }
  }
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
    console.log(width/2);
    console.log(height/2);
    console.log(mouseX);
    console.log(mouseY);
    if(
      mouseX >= width/2 - 150 && 
      mouseX <= width/2 + 150 &&
      mouseY >= height/2 - 85 &&
      mouseY <= height/2 - 15){
        mode = 1;
    }
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