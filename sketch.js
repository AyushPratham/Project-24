var ground1, dustbin1, dustbin2,ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,680,800,20)
	dustbin1 = new dustbin (750,650,5,80)
	dustbin2 = new dustbin (630,650,5,80)
	ball = new paper(200,200,10,10);  
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-5})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  drawSprites();
 
}



