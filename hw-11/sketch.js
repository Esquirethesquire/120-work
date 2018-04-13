

let circle = [];
let bg_color;

function setup() {

    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, windowHeight);
    bg_color = color(98, 98, 98);

    for( let i = 0; i < 20; i++) {
      let t = 10 + 50 * i
      let size = random(20, 100)
      circle[i] = new MovingBall(t, height/2, size)
    }

    }

// creating a new function to create a new object on mouse click
//function mouseClick() {
    //  let r = random( 20, 60);
      //let b = new MovingBall(mouseX, mouseY, r);
      //circle.push(b);

//}


function draw() {
    background(bg_color);

    for(let i = 0; i < circle.length; i++){
      circle[i].move();
      circle[i].edge();
      circle[i].show();
    }


  }





//**********
// Moving Ball class
//*************

class MovingBall {
    constructor( x, y, s) {
      this.x = x;
      this.y = y;
      this.s = s;
      this.deltaX = random(-2,2);
      this.deltaY = random( -2, 2);
      this.deltaS = random( -2, 2);
    }

    //frame() {
    //  this.grow;
      //this.sizecheck;
      //this.move;
      //this.edge;
      //this.show;
  //  }

// making my circle change size
//  grow() {
      //this.s += this.deltaS;
  //  }
// making it so my circle stays within 0 and 100 pixels in size
//  sizeCheck() {
    //  if( this.s >= 100 || this.s <=0 ) {
      //  this.deltaS *= -1;
    //  }
  //  }
// giving my objects motion
  move() {
      this.x += this.deltaX;
      this.y += this.deltaY;
   }

//keeping my objects within the canvas
  edge() {
      if( this.x >= width || this.x <= 0){
        this.deltaX *= -1;
      }
      if( this.y >= height || this.y <= 0) {
        this.deltaY *= -1;
      }
    }

//display my object
  show(){
      push();

      stroke(255);
      strokeWeight(10);
      fill( 'rgb(223, 42, 189)' );
      ellipse( this.x, this.y, this.s);

      pop();
    }


 }
