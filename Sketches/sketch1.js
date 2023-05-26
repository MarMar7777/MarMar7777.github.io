function setup() {
  createCanvas(400, 400);
}


//Draws Head
function draw() {
  fill('sienna')
  background(220);
  ellipse(200, 200, 200, 200)

  
//Left Eye
strokeWeight()
fill(255)
circle(156, 170, 33)
fill(0)
circle(156, 170, 10)
  
//Right Eye
strokeWeight()
fill(255)
circle(248, 172, 33)
fill(0)
circle(248, 172, 10)

//Nose
fill('sandybrown')
triangle(198, 191, 184, 210, 209, 210)
  
//Mouth
fill('lightpink')
circle(199, 237,20)
fill('lightcoral')
circle(194, 234, 13)
circle(203, 233, 13)
  
//Hair
fill('lightsteelblue')
arc(201, 119, 119, 287, PI)
  


//Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
}