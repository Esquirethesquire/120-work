var boxSprite;
function setup() {
  createCanvas(800,600);
  //create a sprite with a placeholder rectangle as visual component
  boxSprite = createSprite(200, 200, 200, 200);
}
function draw() {
  background(0);
  //draw all the sprites
  drawSprites();
}
