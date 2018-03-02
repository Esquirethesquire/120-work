// Define variables

let brColor; // backround color
let col1; //Variables for colors
let number1;
let number2;
let ex = 0;
var point1 = {};
point1.X = 0;
point1.Y = 0;
var point2 = {};
point2.X = 0;
point2.Y = 0;




function setup() {
  brColor = color( 'rgb(31, 176, 172)' );
  // create canvas the size of the window
  createCanvas(windowWidth, windowHeight);
  background(brColor);

// set starting place for points
  point1.X = width/4;
  point1.Y = height/2;
  point2.X = width/2 + width/4;
  point2.Y = height/2;
}

function draw() {



//create points
// make color change on point possible
  col = map( mouseX, 0, windowWidth, 0, 255);

  stroke( col );
  strokeWeight( 50);
  point(point1.X, point1.Y);

  stroke( col );
  strokeWeight( 200 );
  point(point2.X, point2.Y);


//set up pow()
  number1 = pow(2, ex);
  ex = random(1,5);
  number2 = floor(2.7) * 2;
// change position and slowing it down
  frameRate(10);
  point1.X += random( -number2, number1);
  point1.Y += random( -number2, number1);
  point2.X += random( -number2, number1);
  point2.Y += random( -number2, number1);

// ******* Creating bounds for the points
  point1.X = point1.X % width;
  point1.Y = point1.Y % height;
  point2.X = point2.X % width;
  point2.Y = point2.Y % height;


}
