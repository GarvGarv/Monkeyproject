
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var ground;
var backImage;

 function preload(){
  backImage=loadImage("jungle.jpg")
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(displayWidth, displayHeight);
  
  jungle =createSprite (300,300);
  jungle.addImage (backImage);
  jungle.velocityX=-1;
  jungle.x = jungle.width /2;
  
  
monkey = createSprite(80,490,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  
    ground = createSprite(490,490,900,10);
  ground.velocityX=-4;
    ground.x = ground.width /2;
    ground.visible=false;  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
 survivalTime=0;    
}


function draw() {
  
  
  
 if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
      survivalTime = survivalTime+2;
    
 
     }
  if(monkey.isTouching(obstaclesGroup)){
    monkey.scale=0.2;
    obstaclesGroup.destroyEach();
      survivalTime = survivalTime-2;
    
 switch(survivalTime){
     
   case  10: monkey.scale=0.12;
       break;
       
   case  20: monkey.scale=0.14;
      break;
      
   case  30: monkey.scale=0.16;
       break; 
 
   case  40: monkey.scale=0.18;
       break; 
       default:break; 
       
 }
 camera.position.x = displayWidth/2;
 camera.position.y = cars[index-1].y
    
     }
  
   monkey.velocityY = monkey.velocityY + 0.8
 monkey.collide(ground);
  
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
  drawSprites();
  stroke("white");
textSize(20);  
fill("white");
text("survivalTime:"+survivalTime,300,40);
  Food();
  Obstacles();
}



function Food(){
    if (frameCount % 200 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(300,400));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    

    
    //add each cloud to the group
      bananaGroup.add(banana);
    }
} 
  function Obstacles(){
 if (frameCount % 300 === 0){
    //generate random obstacles
    var rand = Math.round(random(480,500));
    var obstacle = createSprite(390,480,10,40);
    obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 200;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}


