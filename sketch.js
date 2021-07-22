var Runner ,Runner_running;
var path,invisiblepath,invisiblepath1,pathImage;

function preload(){
//pre-load images

  Runner_running=loadAnimation ("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png")
}
function setup(){
  createCanvas(600,400);

//creating path moving

  path=createSprite(200,200,30,400);
  path.addImage("path",pathImage)
  path.velocityY=1
  path.scale=1.4

  //creating Runner
  Runner=createSprite(340,290,10,50)
  Runner.addAnimation("running",Runner_running);
  Runner.scale=0.05

//creating invisiblepath
  invisiblepath = createSprite(400,250,20,200);
  invisiblepath.visible = false;

  invisiblepath1 = createSprite(10,250,20,210);
  invisiblepath1.visible = false;
}

function draw() {
  background(230);

  //slide when right arrow is pressed then to right and when left arrow is presssed then to left
  if(keyIsDown(RIGHT_ARROW)){
    Runner.velocityX=3
}

if(keyIsDown(LEFT_ARROW)){
  Runner.velocityX=-3
}

  if(path.y>400){
    path.y=height/2;
  }
 Runner.collide(invisiblepath);
 Runner.collide(invisiblepath1);

 drawSprites();
}
