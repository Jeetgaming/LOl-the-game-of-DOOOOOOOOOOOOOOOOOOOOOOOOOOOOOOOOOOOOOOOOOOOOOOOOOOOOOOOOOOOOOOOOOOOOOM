
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var Paperballthingini;
var Dusbinthingi_1;
var Ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Paperballthingini = new PaperBall(200,640,50);
	Dusbinthingi_1 = new Log(650,59,30,10,PI/2);
	Ground = new Groundie(700,690,2000,20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(Paperballthingini.body, Paperballthingini.body.position, {x:85,y:-85})
}
  background(0);
   Paperballthingini.display();
   Dusbinthingi_1.display();
   Ground.display();
   Engine.update(engine);
   
  
   
}





