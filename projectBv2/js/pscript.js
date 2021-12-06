function setup() {
  let can = createCanvas(600,600);
  can.position(windowWidth/2 - 300, 200);
  background(255);
  strokeWeight(10);
  stroke(0);
  noFill();
  rect(0,0,600,600);
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
  rect(random(width-5),random(height-5),15,random(30,60));
  rect(random(width-5),random(height-5),random(30,60),15)
}

function drawLine() {
  x1 = random(width-5);
  y1 = random(height-5);
  x2 = random(width-5);
  y2 = random(height-5);
  a = random(30,160);
  stroke(0);
  strokeWeight(8)
  line(x1,y1,x1+a,y1);
  line(x2,y2,x2,y2+a);
}


function drawLine2() {
  let x = random(width-5);
  let y = 0
  y ++

  let col1 = "Yellow";
  let col2 = "Red";
  let col3 = "Darkblue";

  let colorNames = [col1, col2, col3];

  let c = floor(random(colorNames.length))
  noStroke();
  fill(colorNames[c]);
  rect(x,y,10,height-5);
  rect(y,x,width-5,10);
}

function clean() {
  clear();
  background(255);
  strokeWeight(10);
  stroke(0);
  noFill();
  rect(0,0,600,600);
}
