//*******
// create orb class
class Orb {
    constructor(){
      this.pos = createVector(random(width), random(height));
      this.r = 100
      this.vel = p5.Vector.random2D();
    }
    show(){
      push();
      translate(this.pos.x, this.pos.y);
      stroke(255);
      strokeWeight(5);
      fill('rgb(212, 0, 178)');
      ellipse(0,0,this.r*2);
      pop();
    }
    move(){
      this.pos.add(this.vel);
    }
    // Bounding my orbs by the edges of the canvas
        edges(){
          if(this.pos.x > width || this.pos.x < 0 ){
          this.vel *= 1;
        }

        if(this.pos.y > height || this.pos.y < 0 ){
          this.vel *= 1;
      }
    }
}
