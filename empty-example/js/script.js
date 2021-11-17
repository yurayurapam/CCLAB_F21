let bgR = 200;
let bgG = 200;
let bgB = 200;

function setup() {
  createCanvas(400,500);
}

function draw() {
  //background(bgR,bgG,bgB);
}

function changeBackgorund() {
  let bgR = random(255);
  let bgG = random(255);
  let bgB = random(255);
  background(bgR,bgG,bgB);
}
