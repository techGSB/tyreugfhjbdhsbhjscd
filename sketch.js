
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var binPart1,binPart2,binPart3,dustbin,di, paperObject,groundObject;
var world;


function preload(){
di = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1300, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	

	groundObject=new Ground(width/2,620,width,20);
	
	dustbin = createSprite(1000,490,20,20);
	dustbin.addImage(di);
	dustbin.scale = 0.7;
	binPart1 = new Dustbin(920,505,10,200);
    binPart2 = new Dustbin(962,585,120,10);
    binPart3 = new Dustbin(1024,505,10,200);
	
	

	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
 
  binPart1.display();
  binPart2.display();
  binPart3.display();
 
  groundObject.display();
  dustbin.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:115,y:-145});

  
	}
}


