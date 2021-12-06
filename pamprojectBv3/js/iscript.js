let cam;
let sliderNum = 4;
let sliderR = 0; // - 100 to 100;
let sliderG = 0;
let sliderB = 0;

function setup() {
  //createCanvas(windowWidth,windowHeight);
  let canvas = createCanvas(640, 480);
  canvas.id("p5-canvas");
  background(255);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  //background(255);

  cam.loadPixels();
  for (let i = 0; i < sliderNum; i++) {

    let x = random(cam.width);
    let y = random(cam.height);
    let dia = random(3, 15);
    drawCircle(x, y, dia);
  }
  if (mouseIsPressed) {
    drawCircle(mouseX, mouseY, random(10, 20));
  }
}

function drawCircle(_x, _y, dia) {
  let x = floor(_x);
  let y = floor(_y);
  let index = (x + y * cam.width) * 4;

  let rnd = 15;
  let r = cam.pixels[index + 0] + sliderR + random(-rnd, rnd);
  let g = cam.pixels[index + 1] + sliderG + random(-rnd, rnd);;
  let b = cam.pixels[index + 2] + sliderB + random(-rnd, rnd);;

  noStroke();
  fill(r, g, b);
  circle(x, y, dia);
}

function drawRect(_x, _y, dia) {
  let x = floor(_x);
  let y = floor(_y);
  let index = (x + y * cam.width) * 4;

  let rnd = 15;
  let r = cam.pixels[index + 0] + sliderR + random(-rnd, rnd);
  let g = cam.pixels[index + 1] + sliderG + random(-rnd, rnd);;
  let b = cam.pixels[index + 2] + sliderB + random(-rnd, rnd);;

  noStroke();
  fill(r, g, b);
  rectMode(CENTER);
  rect(x, y, dia, dia);
}

function saveAsImage() {
  let date = new Date();
  let y = date.getFullYear();
  let m = nf(date.getMonth() + 1, 2, 0); // 0 - 11
  let d = nf(date.getDate(), 2, 0); // 05
  let h = nf(date.getHours(), 2, 0);
  let min = nf(date.getMinutes(), 2, 0);
  let sec = nf(date.getSeconds(), 2, 0);

  let filename = "myArt_" + y + m + d + "_" + h + min + sec;
  console.log(filename);
  saveCanvas(filename, 'png');
}

function clean() {
  clear();
  background(255);
  noFill();
  rect(0,0,600,600);
}
