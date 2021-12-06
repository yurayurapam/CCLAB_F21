function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
let rectSize1 = 20;
noStroke();
for (let x = 0; x < width; x += rectSize1) {
  let y = random(windowHeight);

  fill(255,255,255,0.5);
  rect(0,0,400,400);

  fill(random(100, 255), random(200, 255), random(200, 255));
  rect(x, y, rectSize1, rectSize1);
}
}
