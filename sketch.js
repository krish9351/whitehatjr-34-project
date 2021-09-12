const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backImg , backIg , girl_walking , girl , ground;
var snow_var , snowImg ;

function preload() {
  backImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow4.webp");
  girl_walking = loadAnimation("girl1.PNG","girl2.PNG","girl3.PNG","girl4.PNG","girl5.PNG","girl6.PNG","girl7.PNG","girl8.PNG");
}

function setup() {
  createCanvas(1200,750);
  engine = Engine.create();
  world = engine.world;

  backIg = createSprite(900,370,1200,750);
  backIg.scale = 1.1;
  backIg.addImage("snow2.jpg",backImg);

  girl = createSprite(770, 640, 50, 50);
  girl.addAnimation("girl_walking",girl_walking);

  ground = createSprite(600,750,1200,15);
  ground.visible = false;

  backIg.x=backIg.width/2;
}

function draw() {
  background(255);  
  Engine.update(engine);
  backIg.velocityX = -2;

  if(backIg.x<490){
    backIg.x = backIg.width/2; 
  }

  if(keyDown("space")&& girl.y >= 480){
    girl.velocityY = -14;
  }
  girl.velocityY = girl.velocityY + 0.6;
  girl.collide(ground);
  Snow();
  drawSprites();
}

function Snow() {
  if (frameCount % 10 === 0) {
    var snow_var = createSprite(80,0,40,10);
    snow_var.x = Math.round(random(0,1200));
    snow_var.addImage(snowImg);
    snow_var.scale = 0.1;
    snow_var.velocityY = 3;
    snow_var.lifetime = 250;
    snow_var.depth = girl.depth ;
    girl.depth = girl.depth + 1;
  }
}