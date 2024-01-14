yalgaar_song = "";
cold_hours_song = "";

function preload() {
  yalgaar_song = loadSound("yalgaar.mp3");
  cold_hours_song = loadSound("cold_hours.mp3");
}

function setup() {
  canvas = createCanvas(600, 600);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 600, 600);
}
