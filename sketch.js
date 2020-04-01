const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var ball_image;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);


var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);

World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : ball,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("WHite");
}


function draw() {
  background(0); 
  Engine.update(engine);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);



fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("white");
line(200,5,ball.position.x,ball.position.y);
ball.position.x = mouseX;
ball.position.y = mouseY;
}