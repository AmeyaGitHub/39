var PLAY = 1;
var score=0
var END = 0;
var gameState = PLAY;
var alien,alienImage
var knife,knifeImage
var space,spaceImage
var spaceShip,spaceShipImage
var knifeGroup
var alienGroup
function preload(){
alienImage = loadImage("alien.png");
  knifeImage = loadImage("knife.png");
  spaceImage=loadImage("space.png");
  spaceShipImage= loadImage("spaceShip.png");
}

function setup() {
  createCanvas(600, 600);
   spaceShip = createSprite(100,100,20,50);
 spaceShip.addImage(spaceShipImage); 
 
  spaceShip.scale =0.5;
  
  space=createSprite(300,0,600,600)
  space.addImage(spaceImage)
  space.velocityY=10
  space.y=space.width/2
  space.scale=10
  knifeGroup=new Group()
  score=0
  alienGroup=new Group()
}

function draw() {
  background("black")
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  camera.position.x=displayWidth/2
  camera.position.y=spaceShip.y
  if(gameState === PLAY){
    
  score = score + Math.round(getFrameRate()/60);
    
    if (space.y>600){
    space.y=space.width/2
    
  }
  if(knifeGroup.isTouching(spaceShip)){
        
      knifeGroup.destroyEach()
     gameState=END
      
    }
     if(alienGroup.isTouching(spaceShip)){
        
      alienGroup.destroyEach()
     gameState=END
      
    }
  knife()
    alien()
  space.depth = spaceShip.depth;
   
  spaceShip.depth = spaceShip.depth + 1
  spaceShip.x = World.mouseX
     spaceShip.y=World.mouseY
    spaceShip.velocityY=spaceShip.velocityY+0.5
  }
  else if (gameState === END) {
    text("gameOver",300,300)
    spaceship.visible=false
    
    
  }
 drawSprites()
  text("Score: "+ score, 500,50);
}

function knife(){
  if (World.frameCount % 100 == 0) {
  knifes= createSprite(0,Math.round(random(20, 370)), 10, 10);
  knifes.addImage(knifeImage)
  knifes.velocityX = 3;
  knifes.lifetime = 150;
  knifes.scale = 0.5
    knifes.setCollider("rectangle",0,0,knifes.width,knifes.height);
  
  spaceShip.depth = knife.depth;
     knifeGroup.add(knifes)
  }
}
function alien(){
  if (World.frameCount % 100 == 0) {
  aliens= createSprite(Math.round(random(20, 370),0,10,100))
  aliens.addImage(alienImage)
  aliens.velocityY = 3;
  aliens.lifetime = 150;
  aliens.scale = 0.5
    aliens.setCollider("rectangle",0,0,aliens.width,aliens.height);
  
  spaceShip.depth = alien.depth;
     alienGroup.add(aliens)
  }
}






