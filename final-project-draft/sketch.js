let bg_color;
let ships = [];
let orbs = [];


function setup() {

    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    bg_color = color('rgb(0, 0, 0)');
    for( let i = 0; i < 1; i++) {
      ships.push(new Ship());
}
    let init_x = 200
    let init_y = 200
    for( let i = 0; i < 5; i++) {

    orbs.push(new Orb(init_x, init_y));
    init_x +=400;
    if(init_x > width){
      init_x = 200
      init_y +=200
    }
    }

  }




function draw() {
    background(bg_color);
    for(let i = 0; i < ships.length; i++){
    ships[0].show();
    ships[0].turn();
    ships[0].update();
    ships[0].edges();

  }


    for(let i = 0; i < orbs.length; i++){
      orbs[i].frame();

//making the collision with orbs and ship make ship disappear
        for(let j = 0; j < ships.length; j++){
          if(orbs[i].hits(ships[0])){
            ships.splice(j, 1);
      }

    }
  }
}





    //function to make rotation and velocity stop when key is released
    function keyReleased() {
      ships[0].setRotation(0);
      ships[0].boosting(false);

    }


    //function to rotate when key is pressed
    function keyPressed() {

     if (keyCode == RIGHT_ARROW) {
        ships[0].setRotation(.1);
      }
      else if (keyCode == LEFT_ARROW){
        ships[0].setRotation(-.1);
    }
      else if (keyCode == UP_ARROW){
        ships[0].boosting(true);
  }
}
