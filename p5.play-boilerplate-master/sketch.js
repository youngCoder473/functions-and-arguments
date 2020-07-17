var fixedRect,movingRect


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(700, 200, 50, 50);
  movingRect.debug=true;
  fixedRect.debug=true;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX
  movingRect.y=mouseY
  
  if(isTouching(movingRect,fixedRect)){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    }
    else{
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
    }
  drawSprites();
}
