var ship2, ship;
var sea2, sea;

function preload(){
  ship2 = loadAnimation("ship-3", "ship-4");
  sea2 = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  

  sea =  createSprite(300, 200, 600, 400);
  ship =  createSprite(150, 250, 200, 150);

  sea.velocityX = -4


  ship = addAnimation("ship2");
  sea = addImage("sea2");

  
}

function draw() {
  background("blue");
    drawSprites();

  if(sea.x <=0){
    sea.x = 200
  }
 
}
