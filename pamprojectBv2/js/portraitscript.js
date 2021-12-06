let cam;
let img;
let img2;
let chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function setup() {
  createCanvas(1280, 480);
  cam = createCapture(VIDEO);
  img = createImage(width/2,height);
  img2 = createImage(width/2,height);
}

function draw() {
  background(0);

  cam.loadPixels();

  img.loadPixels();
  img2.loadPixels();

  cam.hide();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      let avg = (r + g + b)/3;
      let threshold = 0.5;
      if (avg > 255 * threshold) {
        img.pixels[index + 0] = 210;
        img.pixels[index + 1] = 140;
        img.pixels[index + 2] = 95;
        img.pixels[index + 3] = 255;
      } else if (avg < 255 && avg > 100) {
        img.pixels[index + 0] = 120;
        img.pixels[index + 1] = 170;
        img.pixels[index + 2] = 170;
        img.pixels[index + 3] = 255;
      } else if (avg < 100){
        img.pixels[index + 0] = 90;
        img.pixels[index + 1] = 130;
        img.pixels[index + 2] = 240;
        img.pixels[index + 3] = 255;
      }
    }
  }

  let gridSize = 12;

  noStroke();
  for (let y = 0; y < img2.height; y += gridSize) {
    for (let x = 0; x < img2.width; x += gridSize) {
      let index = (x + y * img2.width) * 4;

      let r = cam.pixels[index + 0];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      let avg = (r + g + b) / 3;

      let cIndex = floor(
        constrain(map(avg, 0, 255, 0, chars.length), 0, chars.length - 1)
      );
      fill(r,g,b);
      text(chars[cIndex], x, y);
    }
  }

  img.updatePixels();
  // img2.updatePixels();
  image(img,640,0);
  // image(img2,0,0);
}
