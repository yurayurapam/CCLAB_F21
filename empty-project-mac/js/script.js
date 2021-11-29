let sound;
let song;

let amp;
let mic;

function preload(){
  sound = loadSound("assets/beat.mp3");
  song = loadSound("assets/song.mp3");
}

function setup() {
  let canvas = createCanvas(400,500);
  canvas.mousePressed(userStartAudio);
  background(220);

  // amp = new p5.Amplitude();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);

  let volume = mic.getLevel();
  console.log( floor(volume * 100));
  let dia = map(volume, 0, 1, 10, 500);
  // let vol = map(mouseY, 0, height, 1.00, 0.00, true);
  // song.setVolume(vol);
  noStroke();
  fill(100,100,100,80);
  ellipse(width/2, height/2, dia*5, dia*5);

  // let panning = map(mouseX, 0, width, -1.00, 1.00, true);
  // song.pan(panning)
}

function keyPressed() {
  if (key = "p") {
    song.play();
  } else if (key = "s") {
    song.stop();
  }
}




// function mouseDragged() {
//   if (sound.isPlaying() == false) {
//     sound.play();
//   }
// }
