

let ball = {};
ball.width = 50;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
let ballColor;
let back_color = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
}



function draw() {

  //**************
  // if statement making the backround flash random colors if the mous is mousePressed
  //************
  if ( mouseIsPressed ) {
         background( random(255), random(255), random(255) );

     } else {
         background(back_color);
}


//updating ball.x and ball.y.
// creating the ball color
    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;
    ball.width += 1
    ballColor = (255);


// If statement to change ball ballColor
  if ( ball.x >= width/2 ) {
    ballColor = color( random (255), random(255), random(255));

  }
// if statement changing the ball size to grow smaller once it reaches 200 pixels

  if ( ball.width >= 200 ) {
    ball.width = -1 * ball.width
  }

// If ball reaches the edges of the width it reverses direction
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
//If the ball reaches the edges of the height it changes direction
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    noStroke();
    fill( ballColor );
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, -10, 10);
    ball.scale_y = map(mouseY, 0, height, -10, 10);

}
