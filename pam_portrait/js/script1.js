let cam;
let img;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  //cam.hide();
  img = createImage(width,height);
}

function draw() {
  background(0);

  cam.loadPixels();
  img.loadPixels();

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
  img.updatePixels();
  image(img,0,0);
}
