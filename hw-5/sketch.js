 //** Abstract Drawing



 //Create my variables
 let circleX1 = 0;
 let circleY1 = 0;
 let circleX2 = 0;
 let circleY2 = 0;
 let circleX3 = 0;
 let circleY3 = 0;
 let circleX4 = 0;
 let circleY4 = 0;
 let circleX5 = 0;
 let circleY5 = 0;
 let circleX6 = 0;
 let circleY6 = 0;
 let squareWidth = 300;
 let squareHeight = 300;







    // Create setup function
 function setup() {
   // Creating my canvas
    createCanvas( windowWidth, windowHeight);

   }



   function draw() {
       // set the background color
       background( 'rgb(0, 0, 0)' );

       //turn cursor off
       noCursor();

       // move the grid to the center of canvas
       translate( windowWidth * .5 , windowHeight * .5 );





      // *************
      // Start creating my six circles
      //******************

       push();

       strokeWeight( 0 );
       fill( 'rgb(195, 14, 53)');

       push();

       ellipse( circleX1, circleY1, 100, 100);
       //moving circle diagonaly
       circleX1 = circleX1 + 1;
       circleY1 = circleY1 + 1;

       pop();


       //************
       // creating second circle

       push();

       ellipse( circleX2, circleY2, 100, 100);
       //moving circle diagonaly
       circleX2 = circleX2 + 1;
       circleY2 = circleY2 - 1;

       pop();


       //************
       // creating third circle

       push();

       ellipse( circleX3, circleY3, 100, 100);
       // moving circle diagonaly
       circleX3 = circleX3 - 1;
       circleY3 = circleY3 - 1;

       pop();


       //************
       // creating fourth circle

       push();

       ellipse( circleX4, circleY4, 100, 100);
       //moving circle diagonaly
       circleX4 = circleX4 - 1;
       circleY4 = circleY4 + 1;

       pop();


       //************
       // creating fifth circle

       push();

       ellipse( circleX5, circleY5, 100, 100);
       //moving the circle to the side
       circleX5 = circleX5 - 1;


       pop();


       //************
       // creating sixth circle

       push();

       ellipse( circleX6, circleY6, 100, 100);
       //moving the circle to the side
       circleX6 = circleX6 + 1;


       pop();

      //************** End Circles *************************




      //*******************
      // Make Rotating square in center
      //****************


      push();

      //set square to rate on mouseX
      rotate( radians(mouseX) );
      stroke( 0 );
      fill('rgb(17, 158, 0)');

      rect( 0, 0, squareHeight, squareWidth);


      //Make square grow
      squareWidth = squareWidth + 1;
      squareHeight = squareHeight + 1;

      pop();





      //********** Create another Circe on cursor**********

      push();


       // Centering circle on the mouse
      translate( windowWidth*-0.5, windowHeight*-0.5);

      //Creating circle to follow mouseX and mouse Y
      strokeWeight( 0 );
      fill( 'rgb(0, 2, 217)' );
      ellipse( mouseX, mouseY, 200, 200);


      pop();


//**********************************
// End Drawing
//**********************************











}
