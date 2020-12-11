
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
	ground = new Ground(400,680,800,10)
	box = new Box(600,670)
	paper = new Paper(100,670)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  paper.display();
  box.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
	}
}




