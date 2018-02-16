function setup() {
    // create a canvas to draw
    createCanvas( 600, 900 );
}

function draw() {
    // set the background color
    background( 'rgb(34, 134, 164)' );


    // create sandbox
    push();

    // move the grid to the center of canvas
    translate( 300, 450 );



    // **LEGS******************
    push();

    //left LEG
    fill(0);
    triangle( -130, 0, 50, 0, -150, 800);

    //Right leg
    scale( -1, 1);
    fill(0);
    triangle( -130, 0, 50, 0, -150, 800);

    pop();



    // ** BODY *********************
    push();
    //Main Body
    fill( 'rgb(139, 57, 105)' );
    rect( -150, -200, 300, 400, 45 );

    // v neck shirt
    fill('rgb(208, 146, 74)')
    triangle(-50, -200, 50, -200, 0, -100);

    // BUTTON on shirt

    fill( 0 );

    ellipse(-0, -100, 15, 15);

    pop();
    // **END BODY******************





    // ** ARMS ********************
    push();
    // right arm

    stroke( ' rgb(208, 146, 74)');
    strokeWeight(75);
    line( -150, 100, -200, -50 );
    line( -200, -50, -125, -170 );


    push();
    //LEFT ARM
    scale( -1, 1 );
    stroke( ' rgb(208, 146, 74)');
    strokeWeight(75);
    line( -150, 100, -200, -50 );
    line( -200, -50, -125, -170 );

    pop();
    // **END ARMS**


    // ** HEAD ************
    push();
    translate(0, -300);

    //skull
    strokeWeight(1)
    fill(' rgb(208, 146, 74)' );
    ellipse( 0, 25, 200, 200);


    // **MOUTH**
    fill( 0 );
    ellipse( 0, 75, 100, 50);

    //**EYES*********

    //right EYE
    fill( 0 );
    ellipse( -50, 0, 60, 50);

    fill( 'rgb(26, 97, 49)');
    ellipse( -50, 0, 50, 40);

    // right eyebrow
    fill( 0 );
    quad( -80, -50, -10, -40, -10, -20, -50, -30)

    //left EYE
    fill( 0 );
    ellipse( 50, 0, 60, 50);


    fill( 'rgb(26, 97, 49)' );
    ellipse( 50, 0, 50, 40);

    //left eyebrow
    fill( 0 );
    scale( -1, 1)
    fill( 0 );
    quad( -80, -50, -10, -40, -10, -20, -50, -30)

    // ****** Nose *****
    fill( 'rgb(185, 98, 70)' );
    triangle( 0, 0, 20, 40, -20, 40);


    pop();
    // **END MOUTH**

    // **EYES**
    push();
    // eye code goes here

    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** END CHARACTER SANDBOX *****
    pop();



}
