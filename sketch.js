//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var player , BG, home;

function preload(){
   
}
function setup(){
  createCanvas(displayWidth,displayHeight);
  BG=createSprite(width/2,height/2,width,height);
  BG.shapeColor="Blue";
  player=createSprite(width/2,height-50,50,50);

}

function draw() {
  background(250);
  if(gameState==PLAY){
    Croud();
  }

  drawSprites();
  
}
function Croud(){
if(frameCount%120==0){
  var num =Math.round( random(1,5));  
  for(var i=1;i<=num;i++){
    Peeps=createSprite(random(50,width-50),-(random(0,200)),50,50);
    Peeps.velocityY=3;
  }
}
}
