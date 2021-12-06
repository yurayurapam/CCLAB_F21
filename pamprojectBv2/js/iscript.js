function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  frameRate(10);
}

function draw() {
let rectSize1 = 20;
noStroke();
for (let x = 0; x < width; x += rectSize1) {
  let y = random(windowHeight);
  fill(random(100, 255), random(200, 255), random(200, 255));
  rect(x, y, rectSize1, rectSize1);
}
}
