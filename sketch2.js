//This is the setup function
function setup() {                            //Run the setup function
   createCanvas(windowWidth, windowHeight);   //Create a Canvas equal to the Window size
  background(0);                              //Set the background as white
}


//This is the draw function
function draw() {                             //Run the draw function
  background(220);                            //Sets background to light gray
  
   //The Ground
  noStroke();                                 //Set with no stroke
  fill('bisque');                           //Fill color for the sand
  rect(0,400,windowWidth,100);               //Draw a rectangle with width of window and height of 10
  


  //The House
  fill('pink');                             //Set Fill color to Pink
  stroke('black');                          //Set Border color to Black
  rect(50,200,220,200);                       //Draw the rectangle for house 

  //Windows
  fill('white');                            //Set fill white
  strokeWeight(10);                           //Set strokeweight to (10)
  stroke('maroon');                         //Set border to Maroon
  rect(80,250,50,50);                        //Draw rectangle for left window 
  rect(180,250,50,50);                       //Draw rectangle for right window

  //Roof Top
  fill('maroon');                          //Set fill to Maroon
  stroke('black')                          //Set border Black
  triangle(50,200, 100,100,270,200);        //Draw triangle for the roof
}