let bg_color;
let ship;
let orbs = [];

function setup() {

    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    bg_color = color('rgb(0, 0, 0)');

    ship = new Ship();
    for( let i = 0; i < 5; i++) {

    orbs.push(new Orb());
    }

  }




function draw() {
    background(bg_color);
    ship.show();
    ship.turn();
    ship.update();
    ship.edges();

    for(let i = 0; i < orbs.length; i++){
      orbs[i].show();
      orbs[i].move();
      orbs[i].edges();
  }
}



    //function to make rotation and velocity stop when key is released
    function keyReleased() {
      ship.setRotation(0);
      ship.boosting(false);

    }


    //function to rotate when key is pressed
    function keyPressed() {
      if (keyCode == RIGHT_ARROW) {
        ship.setRotation(.1);
      }
      else if (keyCode == LEFT_ARROW){
        ship.setRotation(-.1);
    }
      else if (keyCode == UP_ARROW){
        ship.boosting(true);
  }
}
