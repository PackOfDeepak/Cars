var car,wall;

var speed,weight;

var deformation;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = 80,80,80;
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x - car.x < wall.width/2 + car.width/2){
    deformation = 0.5*weight*speed*speed;
    car.velocityX = 0;
    car.depth = wall.depth+2;
    if(deformation<100){
      car.shapeColor = "green";

    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    if(deformation>180){
      car.shapeColor = "red";
    }


  }
  


  drawSprites();
}