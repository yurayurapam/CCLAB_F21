let x = 500
let y = 300
let d = 100

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  rectMode(CENTER);
  frameRate(6);
}

function draw() {
  let freq = frameCount * 0.5;
  let r = map(cos(freq), -1, 1, 0, 255);
  let g = 170;
  let b = 180;
  push();
  translate(x , y);
  rotate(radians(frameCount * 50.1));
  scale(2.5);
  stroke(r, g, b, 50);
  strokeWeight(2);
  noFill();
  rect(0, 0, d, frameCount);
  pop();
}

function changeXright() {
  x = x + 5;

}

function changeYdown() {
  y = y + 5;
}
 function changeXleft(){
   x = x - 5;
 }

 function changeYup() {
   y = y - 5;
 }


function larger() {
  d = d + 5;
}

function smaller() {
  d = d - 5;
}
