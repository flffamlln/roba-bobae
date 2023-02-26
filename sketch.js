let mode = 0;
let instruction = 0;
let timer = 300;

let honey;
let matcha;
let syrup;
let taro;
let thai;
let milk;
let cafe;
let robot;
let brownbt;

let liquids;
let tea;
let boba;

let customer1;
let customer2;
let customer3;
let customer4;
let customer5;
let customer6;
let customer7;
let customer8;
let customer9;
let customer10;

let cIndex;
let cX;
let cY;

let newOrder;
let orderReceived;
let orderAccepted;

let orderCount = 0;

let orders = [];
let points = 0;
let makingDrinks = false;

function preload(){
  honey = loadImage('graphics/Honey.png');
  matcha = loadImage('graphics/Matcha Powder.png');
  syrup = loadImage('graphics/Simple Syrup.png');
  taro = loadImage('graphics/Taro Powder.png');
  thai = loadImage('graphics/Thai Tea.png');
  milk = loadImage('graphics/Whole Milk.png');
  cafe = loadImage('graphics/Cafe.png');
  robot = loadImage('graphics/Robot.png');
  brownbt = loadImage('graphics/Brown Boba Tea.png');
  purplebt = loadImage('graphics/Purple Boba Tea.png');

  customer1 = loadImage('graphics/Customer1.png');
  customer2 = loadImage('graphics/Customer2.png');
  customer3 = loadImage('graphics/Customer3.png');
  customer4 = loadImage('graphics/Customer4.png');
  customer5 = loadImage('graphics/Customer5.png');
  customer6 = loadImage('graphics/Customer6.png');
  customer7 = loadImage('graphics/Customer7.png');
  customer8 = loadImage('graphics/Customer8.png');
  customer9 = loadImage('graphics/Customer9.png');

  newOrder = loadImage('graphics/New Order.png');
  orderReceived = loadImage('graphics/Order Received.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    cIndex = 0;
    cX = width - 400;
    cY = height/2 + 70;
    orderAccepted = false;
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
  } else if (mode == 3){
    endScreen();
  }
}

// Useful to have multiple elements on one screen
// Home Screen
function homeScreen() {
  // Boba Tea Background
  for(let i = -300; i < height; i += 250){
    for(let j = -300; j < width; j += 250){
      image(purplebt, j, i);
      purplebt.resize(130, 160);
    }
  }

  // Menu Box
  strokeWeight(5);
  stroke("#DED5F5");
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
  rect(0, 200, 1000, 100);
  rect(0, 600, 1000, 100);

  // Render all ingredients
  liquids = [honey, syrup, milk];
  tea = [matcha, taro, thai];
  boba = ["yes", "no"];

  for(let i = 0; i < liquids.length; i++){
    image(liquids[i], 50 + 120 * i, 400);
    liquids[i].resize(175, 275);

    image(tea[i], 120 * i, 0);
    tea[i].resize(300, 300);
  }

  // Render Robot
  image(robot, windowWidth - 400, 150);
  robot.resize(300, 450);

  // Skip Instructions Text
  strokeWeight(5);
  stroke(255);
  fill('#826464');
  textSize(40);
  text("roba-boba's story", width/2, height/2 - 150);
  textAlign(CENTER);

  instructions();

  // Skip Instructions Button
   strokeWeight(5);
   stroke('#629742');
   fill('#B4D1AB');
   rectMode(CENTER);
   rect(width/2, height/2 + 170, 200, 50, 15);

   // Skip Instructions Text
   noStroke();
   fill(0);
   textSize(16);
   text("Skip Introduction ->", width/2, height/2 + 170);
   textAlign(CENTER);
}

function instructions(){
  // Instruction box
  strokeWeight(5);
  stroke("#61A6C3");
  fill("#B1DBE6");
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
  if(!makingDrinks){
    // Add cafe background
    imageMode(CENTER);
    image(cafe, width/2, height/2, 800, 600);

    // Order count
    noStroke();
    fill(0);
    textSize(24);
    text("Orders to make: " + orderCount, width/2 - 330, height/2 + 250);

    enterCustomer();
  } else{

  }

  // Quit Button
  strokeWeight(5);
  stroke('#629742');
  fill('#B4D1AB');
  rect(width - 200, 50, 200, 50, 15);

  // Quit Text
  noStroke();
  fill(0);
  textSize(24);
  text("End game", width-250, 60);
  textAlign(CENTER);

  // Points Box
  strokeWeight(5);
  stroke("#BBADD3");
  fill("#EDEAF5");
  rect(200, height-50, 200, 50, 15);

  // Points Text
  textSize(24);
  strokeWeight(5);
  stroke(255);
  fill(0);
  text("Points: " + points, 160, height-39);
  textAlign(CENTER);

  // Time left text
  fill(0);
  textSize(36);
  textAlign(LEFT);
  text("Time left: " + timer + " seconds", 50, 50);

  // Updating time after each second
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }

  // If time up, switch to score screen
  if (timer == 0) {
    mode = 3;
    orderCount = 0;
    orders = [];
    makingDrinks = false;
  }
}

function endScreen() {
  // Boba Tea Background
  for(let i = -300; i < height; i += 250){
    for(let j = -300; j < width; j += 250){
      image(brownbt, j, i);
      brownbt.resize(130, 160);
    }
  }

  // Menu Box
  noStroke();
  fill('#EEDFD4');
  rectMode(CENTER);
  rect(width/2, height/2, 500, 650, 15);

  // Roba-boba Logo
  strokeWeight(5);
  stroke(255);
  fill('#826464');
  textSize(64);
  text('Game Over', width/2, height/2 - 150);
  textAlign(CENTER);

  // Your Score Is
  strokeWeight(5);
  stroke('#629742');
  fill('#B4D1AB');
  textSize(50);
  text('Your Score Is', width/2, height/2 - 30);
  textAlign(CENTER);

  // Score Text
  strokeWeight(5);
  stroke('#629742');
  fill('#B4D1AB');
  textSize(50);
  text('100 pts!', width/2, height/2 + 30);
  textAlign(CENTER);

  // Play Button Box
  strokeWeight(10);
  stroke(255);
  fill('#EDEAF5');
  rect(width/2, height/2 + 150, 300, 70, 15);

  // Play Button Text
  strokeWeight(5);
  stroke(255);
  fill(0);
  textSize(30);
  text('Return Home', width/2, height/2 + 160);
  textAlign(CENTER);
}

function enterCustomer(){
  //Render all customers
  let customers = [customer1, customer2, customer3, customer4, customer5, customer6, customer7, customer8, customer9];

  image(customers[cIndex], cX, cY);
  customers[cIndex].resize(600, 500);

  if(orderAccepted){
    image(orderReceived, cX, cY - 130);
    orderReceived.resize(100, 100);
  } else{
    image(newOrder, cX, cY - 130);
    newOrder.resize(100, 100);
  }

  cX -= Math.random() * 3;

  if(cX < 410){
    orderAccepted = false;
    cIndex++;
    if(cIndex > 8){
      cIndex = 0;
    }
    cX = width - 400;
  }
}

function mouseClicked() {
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
      mouseY <= height/2 + 190 &&
      mouseY >= height/2 + 130){
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
    if(
      // Clicked end game button
      mouseX >= width - 300 &&
      mouseX <= width - 100 &&
      mouseY >= 25 &&
      mouseY <= 75
    ){
      mode = 3;
      timer = 300;
      orderCount = 0;
      orders = [];
      makingDrinks = false;
    } else if( // Clicked on a message bubble
      mouseX >= cX - 50 &&
      mouseX <= cX + 50 &&
      mouseY >= cY - 140 &&
      mouseY <= cY + 0
    ) {
      if(!orderAccepted){
        orderCount++;
        
        orders.push({
          "tea": tea[Math.floor(Math.random() * 3)],
          "liquid": liquids[Math.floor(Math.random() * 3)],
          "boba": boba[Math.floor(Math.random() * 2)]
        });
      }
      orderAccepted = true;
    } else if(  // Clicked on Make Drinks button
      mouseX >= width/2 + 40 &&
      mouseX <= width/2 + 340 &&
      mouseY >= height/2 + 170 &&
      mouseY <= height/2 + 250
    ){
      makingDrinks = true;
      console.log("CLICKED");
    }
  } else if (mode == 3){
    mode = 0;
  }
}