const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particle = [];
var plinkos = [];
var divisions = [];
 var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  
  ground = new Ground(240,800,480,10);

  for (var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight ));
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  } 

  for (var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  } 
  if(frameCount%90===0){
    particle.push(new Particle(random(width/2-10,width/2-10), 10,10));
  }
}

function draw() {
  background("black");  
  Engine.update(engine);
  drawSprites();

  ground.display();
  
 for (var j = 0; j < particle.length; j++){
   particle[j].display();
 }
 for (var k = 0; k < divisions.length; k++){
  divisions[k].display();
}
for (var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
}
}