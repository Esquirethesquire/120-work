
function setup() {

      // create canvas the size of the window
      createCanvas(windowWidth, windowHeight);
    }


  function draw() {
// declare my variables
    let size = 100;
    let xPos = 0;
    let yPos = 0;
    let brColor = color('rgb(85, 0, 0)');
    background(brColor);

// slow down the animation
    frameRate(5);

//create my ellipses that update their position randomly
    for(let x=width/2; x<= width; x+=50 ){
      for( let y=height/2; y<= height; y+=50){
        xPos = random(x) + 10
        yPos = random(y) + 10
      strokeWeight(2);
      fill(255, random(255), random(255));
      ellipse( xPos, yPos, size, size);

  }


}
}
