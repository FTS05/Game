var canvas, database;
var akns, aknsImg, akani

var gameState = 0;
var playerCount;

function preload(){
  
  //aknsImg = loadImage("gun with hand ak47 not fired.png")
  //akani = loadImage("ak47 fired (good).png")
  
}



function setup() {

  database = firebase.database();
  canvas = createCanvas(1700,950);

  game = new Game();
  game.getState();
  game.start();
    
 
  //akns = createSprite(575,675,20,20);
  //akns.addImage(aknsImg);
  //akns.scale=1;
  
  
}


function draw() {
  background("red");
  
  if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }



  //if(keyDown("space")){
    //akns.addImage(akani)
    //akns.scale = 3.5
  //}

}



