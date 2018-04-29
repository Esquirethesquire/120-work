var boxSprite;
function setup() {
  createCanvas(800,600);
  //create a sprite with a placeholder rectangle as visual component
  boxSprite = createSprite(100, 150, 50, 100);
}
function draw() {
  background(240);
  //draw all the sprites
  drawSprites();
}
