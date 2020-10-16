
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(200,400);
	paper = new Paper(100,100,30);
	ground = new Ground(400,690,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW)
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}


