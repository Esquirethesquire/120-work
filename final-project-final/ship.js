
//************
//create ship class
//**********
  class Ship {

    constructor(){
      this.pos = createVector(width/2, height/2);
      this.r = 20;
      this.direction = 0;
      this.rotation = 0;
      this.vel = createVector(1,0);
      this.isBoosting = false;
    }

    boosting(b){
      this.isBoosting = b;
    }
//updates what the ship is doing, makes it continue moving in the direction
// it is headed after the up arrow
    update(){
      if(this.isBoosting){
        this.boost();
      }
      this.pos.add(this.vel);
      this.vel.mult(0.97);
    }
//adding a vector that point to direction and
//adding to the velocity.
    boost(){
      var force = p5.Vector.fromAngle(this.direction);
      force.mult(.5);
      this.vel.add(force);
    }

//creating my ship
    show(){
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.direction + PI/2);
      stroke(255);
      strokeWeight(5);
      fill('rgb(0, 158, 6)');
      triangle(-this.r,this.r,this.r,this.r,0,-this.r);
      pop();
      }

// Bounding my ship by the edges of the canvas
    edges(){
      if(this.pos.x > width ){
      this.pos.x = width ;
    }
    else if(this.pos.x < 0){
      this.pos.x =  0;
    }
    if(this.pos.y > height ){
    this.pos.y = height ;
  }
  else if(this.pos.y < 0){
    this.pos.y = 0;
  }
}
//creating part of object to modify the direction it turns
      setRotation(a){
        this.rotation = a;
      }

//adding turn to the object
    turn(){
      this.direction += this.rotation;
    }
    }

//********
//END Ship
//*********
