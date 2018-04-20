let circle = [];
let bg_color;

function setup() {

    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    bg_color = color('rgb(0, 0, 0)');

    for( let i = 0; i < 2; i++) {

      circle[i] = new MovingBall(width/2, height/2, 50)
    }


    }




function draw() {
    background(bg_color);
      circle[0].frame();

      circle[1].frame();

//if the two circles intercect then change the color
      if ( circle[0].intersects(circle[1])){
        circle[0].colorChange();
        circle[1].colorChange();
      }

    }








//**********
// Moving Ball class
//*************

class MovingBall {

  constructor( x, y, s) {
      this.x = x;
      this.y = y;
      this.s = random (300,400);
      this.r = this.s / 2
      this.deltaX = random(-10,10);
      this.deltaY = random( -10, 10);
      this.deltaS = random( -2, 2);
      this.col = color ('rgb(180, 38, 136)');
    }

    frame() {
      this.move();
      this.edge();
      this.grow();
      this.check();
      this.show();

}

//color change part of the class
  colorChange() {
    this.col = color ('rgb(180, 38, 136)')

}



 //checking intersect between my objects
  intersects(other) {
    var d = dist(this.x, this.y, other.x, other.y)
    if( d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
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
        this.col = 'rgb(70, 168, 3)';
      }
      if( this.y + this.r >= height || this.y - this.r <= 0) {
        this.deltaY *= -1;
        this.col = 'rgb(70, 168, 3)';
      }
    }


    //making my circle change size
     grow() {
         this.s += this.deltaS;
       }
    //making it so my circle stays within 0 and 100 pixels in size
     check() {
         if( this.s >= 400 || this.s <=300 ) {
         this.deltaS *= -1;
         }
       }



//display my object
  show(){
      push();

      stroke(255);
      strokeWeight(5);
      fill( this.col );
      ellipse( this.x, this.y, this.s);

      pop();
    }

}
