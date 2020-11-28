
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground;
var dustbin1,dustbin2,dustbin3;
var paperObject;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new PAPER(100,350,10);
ground=new Ground(width/2, 680, width, 10 );
dustbin1=new DUSTBIN(700,670,100,10);
dustbin2=new DUSTBIN(650,650,10,50);
dustbin3=new DUSTBIN(750,650,10,50);
//paperObject=new PAPER(100,350,20);

//Engine.run(engine);

  
}


function draw() {
  //rectMode(CENTER);
  background("white");
 Engine.update(engine);

 paper1.display();
 ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

//drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-65})

	}

}

