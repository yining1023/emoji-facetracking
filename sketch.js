// For more: https://github.com/auduno/clmtrackr

var ctracker;
var img;

function setup() {
  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(800, 600);
  videoInput.position(0, 0);
  //videoInput.hide();

  // setup canvas
  var cnv = createCanvas(800, 600);
  cnv.position(0, 0);
  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);
  noStroke();
  img = loadImage("mona.png");
}

function draw() {
  clear();
  var positions = ctracker.getCurrentPosition();
  for (var i = 0; i < positions.length; i++) {
    var size = 1.2*(positions[7][1] - positions[20][1]);
    image(img, positions[41][0] - size/2, positions[41][1] - size/2 + size/10, size, size);
  }
}