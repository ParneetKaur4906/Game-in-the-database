var database;
var canvas,backgroundImg;
var gameState = 0;
var playerCount;
var form,game,player;
var allPlayers;

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
     game = new Game();
     game.getState();
     game.start();
}

function draw(){
   
    if(playerCount===4){
    game.update();
    }
    if(gameState===1){
    clear();
    game.play();
    }
    
}


