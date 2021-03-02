
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;



function setup() {
	createCanvas(1250, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,665,2000,24);
	
	oneSide = new Dustbin(770,650,200,20);
	twoSide = new Dustbin(700,650,20,175);
	
	
	paper = new Paper(50,610,17);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  ground.display();
  oneSide.display();
  paper.display();

  
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:43,y:-60})
	}
}



