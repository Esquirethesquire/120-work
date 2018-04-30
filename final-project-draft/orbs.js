class Orb {
    constructor(){
      this.pos = createVector(random(width), random(height));
      this.r = 50
    }
    show(){
      translate(this.pos.x, this.pos.y);
      stroke(255);
      strokeWeight(5);
      fill('rgb(212, 0, 178)');
      ellipse(0,0,this.r*2)
    }

}
