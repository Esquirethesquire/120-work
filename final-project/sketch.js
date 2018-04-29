

let circle = [];
let bg_color;
let ship;


function setup() {

    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    bg_color = color('rgb(0, 0, 0)');

    ship = new Ship();

    for( let i = 0; i < 5; i++) {

      circle[i] = new Orb(width/2, height/2, 50)
    }

    }




function draw() {
    background(bg_color);

    ship.show();
    ship.turn();



    for(let i = 0; i < circle.length; i++){
      circle[i].frame();

    }




  }

  //************
  //create ship class
  //**********
  class Ship {

    constructor(){
      this.pos = createVector(width/2, height/2);
      this.r = 20;
      this.direction = 0;
      this.rotation = 0;
    }

    show(){

      rotate(this.direction);
      stroke(255);
      strokeWeight(5);
      fill('rgb(0, 158, 6)');
      triangle(-this.r,this.r,this.r,this.r,0,-this.r);
      }

  //adding a rotate mechanic
    turn(){
      this.direction += this.rotation;
    }

    setRotation(a){
      this.rotation = a;
    }

    keyPressed(){
      if (keyCode == RIGHT_ARROW) {
        this.setRotation(0.1);
      } else if (keyCode == LEFT_ARROW);
      this.setRotation(-0.1);
    }

    keyReleased() {
        this.setRotation(0);
    }

  }



//******************
//Creating my orbs!
//****************
class Orb {

  constructor(x,y,s) {
    this.x = x;
    this.y = y;
    this.s = 100;
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
    fill('rgb(212, 0, 178)');
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
