//Global Variable
var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1200,400);
  car = createSprite(50, 200, 70, 30);
  wall = createSprite(1100, 200, 10, 100);
  wall.shapeColor = "Purple";
  speed = random(50,90);
  weight = random(400,1500);
  //Setting the velocity of the car

}

function draw() {
  background(200,200,200);  
  if(keyDown("Space")){
    car.shareColor = "Grey";
    car.x = 50;
    car.y = 200;
    car.velocityX = speed;
  }
  if(isTouching(car,wall)){
    car.velocityX = 0;
    deformation = (0.5 * speed * speed * weight)/ 22500;
    if (deformation < 100){
      car.shapeColor = color(0,255,0);
    }
    if (deformation >= 100 && deformation <= 180){
      car.shapeColor = color(230,230,0);
    }
    if (deformation > 180){
      car.shapeColor = color(255,0,0);
    }

  }

  drawSprites();
}