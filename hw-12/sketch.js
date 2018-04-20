let circle = [];
let bg_color;

function setup() {

    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    bg_color = color('rgb(0, 0, 0)');

//create two circles based off of my array
    circle[0] = new MovingBall(200, 200);
    circle[1] = new MovingBall(600,600);



    }




function draw() {
    background(bg_color);
      circle[0].edge();
      circle[0].move();
      circle[0].show();
      circle[0].grow();
      circle[0].check();


      circle[1].edge();
      circle[1].move();
      circle[1].show();
      circle[1].grow();
      circle[1].check();

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
      this.s = random (200,300);
      this.r = this.s / 2
      this.deltaX = random(-10,10);
      this.deltaY = random( -10, 10);
      this.deltaS = random( -2, 2);
      this.col = color ('rgb(180, 38, 136)');
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
         if( this.s >= 300 || this.s <=200 ) {
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
