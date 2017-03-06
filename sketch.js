var angle = 0;

function setup(){
  createCanvas(800,800);
  background(0);

}

function draw(){

  rotate(mouseX);
  translate(mouseX, mouseY);
  var weight= dist(mouseX,mouseY,pmouseX,pmouseY);
  strokeWeight(weight);
  rect(-80,-10,160,20);
  if (mouseIsPressed) {
    stroke(0,102,102);
      fill(200);
  } else {
    stroke(200);
    fill(102,102,153);
  }
  angle+=0.5;
}
