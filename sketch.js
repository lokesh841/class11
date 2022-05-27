
var trex ,trex_running;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,60)
 trex.addAnimation("ABC",trex_running)
 trex.scale=0.7
 ground=createSprite(300,190,600,10)
}
function draw(){
  background("white")
  drawSprites()
  if(keyDown("space")){
    trex.velocityY=-12
  }
  trex.velocityY+=1
  trex.collide(ground)
}