function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  line(300, 0, 300, 300);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill(0, 0, 100);
    background('pink')
    ellipse(mouseX, mouseY, 40, 40);
    textSize(10)
    text("HELLO" , 150, 150)
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill(57, 0, 0);
     background('aquamarine')
    ellipse(mouseX, mouseY, 40, 40);
    textSize(20)
    text("ALL" ,150, 150);
  }
  
  else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 123, 0);
     background('bisque')
    ellipse(mouseX, mouseY, 40, 40);
    textSize(30)
    text("FELLOW" , 150, 150)
  }
  
  else if (mouseX > 300 && mouseX <= 400) {
    fill( 255, 255, 255)
     background('black')
    ellipse(mouseX, mouseY, 40, 40);
    textSize(40)
    text("HUMANS" , 150, 150)
  }
  
  
}






