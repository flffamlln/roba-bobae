let mode = 0;
let instruction = 0;

let honey;
let matcha;
let syrup;
let taro;
let thai;
let milk;
let cafe;

function preload(){
  honey = loadImage('graphics/Honey.png');
  matcha = loadImage('graphics/Matcha Powder.png');
  syrup = loadImage('graphics/Simple Syrup.png');
  taro = loadImage('graphics/Taro Powder.png');
  thai = loadImage('graphics/Thai Tea.png');
  milk = loadImage('graphics/Whole Milk.png');
  cafe = loadImage('graphics/Cafe.png');
}

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
    introScreen();
  } else if (mode == 2) {
    play();
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

// Intro Screen
function introScreen() {
  imageMode(CORNER);

  // Background
  noStroke();
  background('#FCF5F0');

  // Shelves
  strokeWeight(1);
  stroke(0);
  fill('#F1DFEC');
  rectMode(CENTER);
  rect(0, 200, 1200, 100);
  rect(0, 480, 1200, 100);

  // Render all ingredients
  let liquids = [honey, syrup, milk];
  let powders = [matcha, taro, thai];

  for(let i = 0; i < liquids.length; i++){
    image(liquids[i], 70 + 150 * i, 250);
    liquids[i].resize(175, 275);

    image(powders[i], 150 * i, 0);
    powders[i].resize(300, 300);
  }

  instructions();

  // Skip Instructions Button
   strokeWeight(1);
   stroke(0);
   fill("#EEDFD4");
   rectMode(CENTER);
   rect(width/2, height/2 + 100, 200, 50, 15);

   // Skip Instructions Text
   noStroke();
   fill(0);
   textSize(16);
   text("Skip Introduction", width/2, height/2 + 105);
   textAlign(CENTER);
}

function instructions(){
  // Instruction box
  strokeWeight(1);
  stroke(0);
  fill(255);
  rectMode(CENTER);
  rect(width/2, height/2, 500, 200, 15);

  // Instruction text rendering
  let txt;
  if (instruction == 0) {
    txt = "Welcome to roba-boba! (1/8)"
  } else if (instruction == 1) {
    txt = "A hundred years into the future, \n humans have migrated outside of planet Earth. (2/8)"
  } else if (instruction == 2) {
    txt = "Robots have also gained consciousness. \n Thankfully they aren't trying to overrun the world. (3/8)"
  } else if (instruction == 3) {
    txt = "A couple of robots have decided to \n pursue their passion project of  \n opening their very own boba shop! (4/8)"
  } else if (instruction == 4) {
    txt = "You are a newly hired robot boba barista. (5/8)"
  } else if (instruction == 5) {
    txt = "Try to keep up and serve as many delicious \n boba teas to customers before the timer runs out! (6/8)"
  } else if (instruction == 6) {
    txt = "Remember, customers care about \n drinks made accurately!!! \n This will reflect in your point accumulation. (7/8)"
  } else if (instruction == 7) {
    txt = "Good luck!!! (8/8)"
  }

  noStroke();
  fill(0);
  textSize(18);
  text(txt, width/2, height/2);
  textAlign(CENTER);
}

function play() {
  imageMode(CENTER);
  image(cafe, width/2, height/2, 800, 600);

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
    // If press skip intro button
    if(
      mouseX <= width/2 + 110 &&
      mouseX >= width/2 - 110 &&
      mouseY <= height/2 + 130 &&
      mouseY >= height/2 + 70){
      instruction = 0;
      mode = 2;
    } else{ // If press outside skip intro button
      if(instruction < 7){
        instruction++;
      } else{
        instruction = 0;
        mode = 2;
      }
    }
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