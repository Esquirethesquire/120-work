
let bg_color;
let ship;


function setup() {

    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    bg_color = color('rgb(0, 0, 0)');
      ship = new Ship();

    }




function draw() {
    background(bg_color);

    ship.show();
    ship.turn(0.1);



}


//function to make rotation stop when key is released
function keyReleased() {
  this.setRotation(0);
}


//function to rotate when key is pressed
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    this.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW);
  this.setRotation(-0.1);
}




//**********
//create Ship
//*************
function Ship() {
  this.pos = createVector(width/2, height/2);
  this.r = 20;
  this.direction = 0;
  this.rotation = 0;


//creating to display th ship
this.show = function() {
  translate(width/2, height/2);
  rotate(this.direction);
  stroke(255);
  strokeWeight(5);
  fill('rgb(0, 158, 6)');
  triangle(-this.r,this.r,this.r,this.r,0,-this.r);

}

//this.setRotation = function(a) {
///  this.rotation = a;
//}

  this.turn = function(angle){
    this.direction += angle;
  }


}
