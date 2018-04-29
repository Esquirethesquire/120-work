let circle = [];





for( let i = 0; i < 5; i++) {

  circle[i] = new Orb(width/2, height/2, 50)
}






for(let i = 0; i < circle.length; i++){
  circle[i].frame();






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
