const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var gd;
var b;





function setup() {
  createCanvas(800,400);
  engine =Engine.create();
world =engine.world;
var gd_options ={
  isStatic : true
}

gd = Bodies.rectangle(400,380,800,10,gd_options);
World.add(world,gd);
var b_options ={
  restitution : 1
}

b = Bodies.rectangle(400,20,20,20,b_options);
World.add(world,b);

}

function draw() {
  background("red");  
Engine.update(engine);
rectMode(CENTER);
fill ("black");
rect(gd.position.x,gd.position.y,800,10);
rectMode(CENTER);
fill ("white");
rect(b.position.x,b.position.y,20,20);

}