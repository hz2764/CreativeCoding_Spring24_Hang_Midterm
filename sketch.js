function setup() {
 // put setup code here
  createCanvas(800, 800);
  background(255);
}

function draw() {
  stroke(random(0,255), random(0,255), random(0,255));
  if(mouseIsPressed === true){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
