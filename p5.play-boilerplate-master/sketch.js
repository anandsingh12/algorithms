var fixedRect, movingRect;
var op1, op2, op3,op4;

function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
  movingRect= createSprite(400,200,80,30);
  movingRect.shapeColor = "green"; 
  movingRect.debug=true;
  op1 = createSprite(400,300,60,60);
  op1.shapeColor = "green";
  op2 = createSprite(500,600,70,90);
  op2.shapeColor = "green";
  op3 = createSprite(700,200,40,70);
  op3.shapeColor = "green";
  op4 = createSprite(100,300,30,80);
  op4.shapeColor = "green";
}

function draw() {
  background(0);  
  console.log(movingRect.x - fixedRect.x);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(op2,movingRect)){
    movingRect.shapeColor="yellow";
    op2.shapeColor="yellow";
  }
  else
  {
    movingRect.shapeColor="green";
    op2.shapeColor="green";
  }

  drawSprites();
}


