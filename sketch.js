var bird;
var pipes = [];
var pipe_up;
var pipe_dwn;
var bg;
var fg;
var birdy;
var game_over;
var ready;
var gaming = true;
var over = false;
function preload () {
 bg = loadImage('assets/bg.png');
  fg = loadImage('assets/fg.png');
  birdy = loadImage('assets/bird.png');
  pipe_up = loadImage('assets/pipeNorth.png');
  pipe_dwn = loadImage('assets/pipeSouth.png');
  game_over= loadImage('assets/sprite1.png');
  ready=loadImage('assets/sprite2.png');
}
function setup() {
 
  createCanvas(288, 512);
   bird = new Bird();
  pipes.push(new Pipe());
 
}

function draw() {
  
  background(bg);
  image(fg,0,394);
  if (gaming)
  {
    image(ready,50,200);
  }
  else
  {
      
    for (var i = pipes.length-1; i >= 0; i--) 
    {

      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)) 
      {
        console.log("HIT");
        
        noLoop();
        
        image(game_over, 50,250);
        over = true;
      }

      if (pipes[i].offscreen()) 
      {
        pipes.splice(i, 1);
      }
    }

      bird.show();
      bird.update();
    if (frameCount % 150 == 0) 
    {
      pipes.push(new Pipe());
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    
    gaming = false;
    if (!over){
    bird.up();
    }
  }
  
  
}
