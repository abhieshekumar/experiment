const pointsS = {};
let counterS = 0;
let rabbit;
let carrot;

function preload(){
  rabbit = loadImage('./asset/rabbit.png');
  carrot = loadImage('./asset/carrot.png')
}

function setup() {
  createCanvas(windowWidth, windowWidth);
  stroke('RED');
  image(rabbit, 30, 30);
  image(carrot, windowWidth-100, windowWidth-100);
}

function mouseDragged() {
  stroke(color(255,0,0));
  strokeWeight(10);
  let x = mouseX;
  let y = mouseY;
  let px = pmouseX;
  let py = pmouseY;
  line(x, y, px, py);
  pointsS['Point'+counter]=[x,y,px,py];
  counterS++;
  return false;
}

function complete() {
  let payload = {
    "drag-point-path": pointsS
  }
  const button = document.querySelector('#dataButton');
  button.setAttribute('onclick', '');
  const drag_point_path = payload["drag-point-path"];
  currentDoc.set({drag_point_path},{merge:true}).then(() => {button.classList.add('green')}).catch((err) => {button.classList.add('red')});
}

new p5();