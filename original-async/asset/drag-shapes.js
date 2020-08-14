const points = {};
let counter = 0;
function setup() {
  createCanvas(windowWidth, windowHeight-200);
  colorMode(RGB, 255, 255, 255, 1);
  background(255);
  strokeWeight(4);
  stroke(0, 0, 0, 0.1);
  /*rect(120, 20, 70, 70);
  circle(155, 180, 90);*/
  line(80,100, windowWidth-80, 100);
}

function mouseDragged() {
  stroke(color(255,0,0));
  strokeWeight(5);
  let x = mouseX;
  let y = mouseY;
  let px = pmouseX;
  let py = pmouseY;
  line(x, y, px, py);
  points['Point'+counter]=[x,y,px,py];
  counter++;
  return false;
}

function complete() {
  let payload = {
    "drag-point-shapes": points
  }
  const button = document.querySelector('#dataButton');
  button.setAttribute('onclick', '');
  const drag_point_shapes = payload["drag-point-shapes"];
  currentDoc.set({drag_point_shapes},{merge:true}).then(() => {button.classList.add('green')}).catch((err) => {button.classList.add('red')});
}

new p5();