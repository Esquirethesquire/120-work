//*******
// create orb class
class Orb {
  constructor(x,y,s) {
    this.posX = x;
    this.posY = y;
    this.r = 100
    this.deltaX = random(-3, 3);
    this.deltaY = random(-3, 3);
    }
    show(){
      push();

      stroke(255);
      strokeWeight(5);
      fill('rgb(212, 0, 178)');
      ellipse(this.posX,this.posY,this.r*2);
      pop();


      }

      frame() {

        this.show();
        this.move();
        this.edge();

      }

        // giving my objects motion
          move() {
              this.posX += this.deltaX;
              this.posY += this.deltaY;
           }

        //keeping my objects within the canvas
          edge() {
              if( this.posX + this.r >= width || this.posX - this.r <= 0){
                this.deltaX *= -1;
              }
              if( this.posY + this.r >= height || this.posY - this.r <= 0) {
                this.deltaY *= -1;
              }
            }
      //adding collision detection to the orbs
          hits(ship){
            let d = dist(this.posX, this.posY, ship.pos.x, ship.pos.y);
            if( d < this.r){
              console.log('HIT');
              return true;
            }
          }
}
