let bg_color;
let ship;
let orb = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  bg_color = color('rgb(0, 0, 0)');
  ship = new Ship();
  for( let i = 0; i < 5; i++) {

    orb[i] = new Orb(width/2, height/2, 50)
  }

}
function draw() {
  background(bg_color);
  orb.frame();
  ship.show();
}




//************
//create ship class
//**********
class Ship {
  constructor(){
    this.pos = createVector(width/2, height/2);
    this.r = 20;
  }
  show(){
    translate(width/2, height/2);
    stroke(255);
    strokeWeight(5);
    fill('rgb(0, 158, 6)');
    triangle(-this.r,this.r,this.r,this.r,0,-this.r);

  }
}





//******************
//Creating my orbs!
//****************
class Orb {

  constructor(x,y,s) {
    this.x = x;
    this.y = y;
    this.s = 200;
    this.r = this.s/2;
    this.deltaX = random(-5, 5);
    this.deltaY = random(-5, 5);

  }

  frame() {

    this.show();
    this.move();
    this.edge();
  }

  show() {
    stroke(255);
    strokeWeight(5);
    fill('rgb(0, 175, 2)');
    ellipse(this.x,this.y,this.s)
    }

    // giving my objects motion
      move() {
          this.x += this.deltaX;
          this.y += this.deltaY;
       }

    //keeping my objects within the canvas
      edge() {
          if( this.x + this.r >= width || this.x - this.r <= 0){
            this.deltaX *= -1;
          }
          if( this.y + this.r >= height || this.y - this.r <= 0) {
            this.deltaY *= -1;
          }
        }

}
