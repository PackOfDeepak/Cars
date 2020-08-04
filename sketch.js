var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(200, 200, 50, 80);
 movingRect = createSprite(400,200,80,30);
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";
 fixedRect.debug = true;
 movingRect.debug = true;
}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
    return true;
  }
  else{
    return false;
  }
  
  
  
 
}