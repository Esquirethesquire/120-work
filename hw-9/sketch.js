

let posArr = [];
let yPos = 0
let xPos = 0

function setup() {

  //creating the canvas
  createCanvas( windowWidth, windowHeight );
  background( 0);

  // create numbers for the array
  for( let num = 0; num < 10; num++){
  posArr.push(random(0, windowWidth))
}
}

// create my draw function
function draw(){

//add circle function into the draw function
  drawCircle();
}

//********
//Create function to draw an ellipse
//*********
function drawCircle() {


// using the array to create more than one circle
for( let idx = 0; idx < posArr.length; idx++){
  stroke( 0 );
  fill( 'rgb(251, 28, 229)');
  ellipse( posArr[idx]  , yPos, 100 );


  yPos = ( yPos + 1 ) % windowHeight

}

  }
