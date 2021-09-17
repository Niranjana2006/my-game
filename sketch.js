
function setup() {
  createCanvas(1200,600);
edges=createEdgeSprites();
wall1=createSprite(115, 30, 10, 300);
wall2=createSprite(30,250,300,10);
wall3=createSprite(420,450,300,10);
wall4=createSprite(188,81,150,10);
wall5=createSprite(59,350,10,200);
wall6=createSprite(121,597,10,200);
wall7=createSprite(260,160,10,200);
wall8=createSprite(226,580,200,10);
wall9=createSprite(360,60,10,200);
wall10=createSprite(272,360,250,10);
wall11=createSprite(400,351,10,200);
wall12=createSprite(567,73,300,10);
wall13=createSprite(1100,106,10,250)
wall14=createSprite(993,451,200,10)
wall15 =createSprite(993,551,10,200)
wall16=createSprite(545,294,10,250)
wall17=createSprite(970,135,250,10)
wall18=createSprite(665,145,10,150);
wall19=createSprite(780,53,10,174);
wall20=createSprite(670,450,10,270);
wall21=createSprite(840,320,200,10);
wall22=createSprite(980,270,250,10);
snake=createSprite(1160,560,20,20)
mouse=createSprite(30,30,20,20)
}

function draw() {
  background("lightgreen");  
  if(keyDown(UP_ARROW)){
    //snake.y=snake.y-2;
    snake.velocityY=-2;
  }
  if(keyIsDown(DOWN_ARROW)){
    //snake.y=snake.y+2;
    snake.velocityY=2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    //snake.x=snake.x+2;
    snake.velocityX=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    //snake.x=snake.x-2;
    snake.velocityX=-2;
  }
  snake.collide(edges)
  mouse.collide(edges)
  drawSprites();
  text(mouseX+" "+mouseY,mouseX,mouseY)
}