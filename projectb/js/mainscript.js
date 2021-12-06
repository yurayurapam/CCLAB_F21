function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  plus = 0;
}

function draw() {
  x = (frameCount / 2) * random(-20,20);
  freq = frameCount * 0.0001;
  amp = 50;
  plus += 0.01;
  y = random(500);
  noStroke();

  push();
  fill(random(180, 200), random(220.255), random(180, 255), random(100));
  circle(x, y + 5, random(60));
  pop();


  push();
  fill(random(100, 255), random(100, 255), random(100, 255), random(100));
  circle(x, y, random(120));
  pop();
}
