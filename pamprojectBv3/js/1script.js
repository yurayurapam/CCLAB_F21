function setup() {
  let canva = createCanvas(400,400);
  canva.position(400, 0);
  background(255);
  frameRate(5);
}

function draw() {
  let x = random(width);
  let y = 0
  y ++

  let col1 = "Yellow";
  let col2 = "Red";
  let col3 = "Darkblue";

  let colorNames = [col1, col2, col3];

  let c = floor(random(colorNames.length))
  noStroke();
  fill(255,255,255,50)
  rect(0,0,400,400)
  noStroke();
  fill(colorNames[c]);
  rect(x,y,10,height);
  rect(y,x,width,10);
}
