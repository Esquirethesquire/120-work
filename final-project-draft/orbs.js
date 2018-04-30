//*******
// create orb class
class Orb {
  constructor(x,y,s) {
    this.x = x;
    this.y = y;
    this.r = 100
    this.deltaX = random(-3, 3);
    this.deltaY = random(-3, 3);
    }
    show(){
      push();

      stroke(255);
      strokeWeight(5);
      fill('rgb(212, 0, 178)');
      ellipse(this.x,this.y,this.r*2);
      pop();


      }

      frame() {

        this.show();
        this.move();
        this.edge();
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
