Nathan Killian, 50

[Live Sketch Link](https://alexk2313.github.io/120-work/hw-7/)


# HW 7 | Describe then Alter the Bouncing Ball





# what the original code is doing.
The orginal code creates a ball that bounces back and forth between the window parameters. It is constrained by if statements and we can alter the path of the ball by using the mousePressed function.


# What does each line do?
  1. When you declare your variables they are creating the initial size, and location of the ball.
  2. By using the setup function the canvas size and color are designated.
  3. Within the draw function ball.x and ball.y are updated with an addition assignment operator and this is what gives the ball movement. If statements are used to confine the ball to the parameters of the window by using logical OR statements within them, reversing the sign of ball.delta. The ball itself is created within the draw function based off the variables and the changes that we will be make depending on the mouse click.
  4. The mousePressed function is used to alter the trajectory of the ball. This is done by assigning the variables ball.scale_x and ball.scale_y to change based off of a map fuction including mouseX and mouseY. These two variables are linked with the position variables ball.x and ball.y earlier in the code.



## How did you alter the sketch?

1. I changed the ball to become a random color after it reaches width/2 using If statements.
2. i changed the backround to be random when "mouseIsPressed" using if statements.
3. I made the ball change size using if statements.
4. I added negative numbers in the map function so you could alter the path of the ball entirely and not just slightly.
