
function setup() {
  let can = createCanvas(600,600);
  can.position(windowWidth/2-300, 150);
  background(255);
}

function drawRect() {
  let col1 = "Orange";
  let col2 = "Pink";
  let col3 = "Blue";

  let colorNames = [col1, col2, col3];

  let c = floor(random(colorNames.length))

  noStroke();
  fill(colorNames[c]);
  rect(random(width/2 - 300, width/2 + 300), random(height/2 - 300, height/2 + 300),random(20,130),random(20,130));

  fill(0);
  rect(random(width),random(height),15,random(30,60));
  rect(random(width),random(height),random(30,60),15)
}

function drawLine() {
  x1 = random(width);
  y1 = random(height);
  x2 = random(width);
  y2 = random(height);
  a = random(30,160);
  stroke(0);
  strokeWeight(8)
  line(x1,y1,x1+a,y1);
  line(x2,y2,x2,y2+a);
}


function drawLine2() {
  let x = random(width);
  let y = 0
  y ++

  let col1 = "Yellow";
  let col2 = "Red";
  let col3 = "Darkblue";

  let colorNames = [col1, col2, col3];

  let c = floor(random(colorNames.length))
  noStroke();
  fill(colorNames[c]);
  rect(x,y,10,height);
  rect(y,x,width,10);
}
