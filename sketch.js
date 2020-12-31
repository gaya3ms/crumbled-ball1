
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var db1, db2, db3;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,40);

	paper = new Paper(100,600,30);

	db1 = new Dustbin(590,620,20,80);
	db2 = new Dustbin(640,650,80,20);
	db3 = new Dustbin(690,620,20,80);

	
	Engine.run(engine);
	console.log(paper.radius)
}


function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	db1.display();
	db2.display();
	db3.display();
	paper.display();

	drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.position, {x:195, y:-100})
	}
}



