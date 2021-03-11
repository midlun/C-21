var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup()
{
  createCanvas(800,400);
  
  fixedRect = createSprite(50,100,50,50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,200,80,30);
  movingRect.shapeColor="green";
  gameObject1 = createSprite(150, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(250, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(350, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(450, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw()
{
  background("black");  
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  //console.log(movingRect.x-fixedRect.x);

  isTouching(movingRect,gameObject4);
  isTouching(movingRect,gameObject2);
  


  drawSprites();
}

function isTouching(a,b)
{
  if(a.x-b.x <b.width/2+a.width/2
    &&b.x-a.x <b.width/2+a.width/2 
    &&a.y-b.y <b.height/2+a.height/2
    &&b.y-a.y<b.height/2+a.height/2 )
  {
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else
  {
    a.shapeColor="green";
    b.shapeColor="green";
  }
}