var ground,Bground,Cground;
var player,player_running,player_jumping;

var coin,coinGroup,coinImg;



function preload(){
  player_running = loadAnimation("Player/1.png","Player/2.png","Player/3.png","Player/4.png"
  ,"Player/5.png","Player/6.png","Player/7.png","Player/8.png","Player/9.png","Player/10.png");

  coinImg = loadAnimation("Points/1.png","Points/2.png","Points/3.png","Points/4.png","Points/5.png"
  ,"Points/6.png")

  bg = loadImage("bgg.png");

  obs1Img = loadAnimation("Obstacle2/1.png","Obstacle2/2.png","Obstacle2/3.png")

}
function setup(){
  createCanvas(800,600);

  Bground = createSprite(500,300,50,50);
  Bground.addImage(bg);
  
 
  ground = createSprite(500,470,1000,20);
  ground.shapeColor = "green";
  ground.visible = false;

  player = createSprite(75,470,45,45);
  player.addAnimation("running",player_running);
  player.setCollider("circle",0,0,100);
  player.debug = false;
  player.scale = 0.5;


  

  

  coinG = new Group();
  obs1G = new Group();

  

}
function draw(){
  background("black");

  player.collide(ground);

  Bground.velocityX = -8;

  
 

  if(Bground.x<-4000){
    Bground.x=500;
    
  }  

 

  

  player.velocityY = player.velocityY + 0.5;
  
  if(keyDown(UP_ARROW) && player.y>400){
    
    player.velocityY = -15;
  }
  else{
    player.changeAnimation("running",player_running);
  }
  spawnCoin();
  spawnObstacles();
  drawSprites();

}
function spawnCoin(){
  if (frameCount % 50 === 0) {
      coin = createSprite(900,120,40,10);
      coin.y = Math.round(random(150,320));
      coin.addAnimation("coins",coinImg);
      coin.scale = 0.5;
      coin.velocityX = -8;
      
       //assign lifetime to the variable
      coin.lifetime = 200;  
    
      coin.depth=player.depth;
      player.depth=player.deph+1;
    
      
      coinG.add(coin);
    
  }
}
function spawnObstacles(){
  if (frameCount % 150 === 0) {
    obs1 = createSprite(900,380,40,10);
    obs1.addAnimation("coins",obs1Img);
    obs1.scale = 0.15;
    obs1.velocityX = -8;
    
     //assign lifetime to the variable
    obs1.lifetime = 200;  
  
    obs1.depth=player.depth;
    player.depth=player.deph+1;
  
    
    obs1G.add(obs1);
  
}
}