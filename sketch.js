
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rectbottom;
var rectleft;
var rectright;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(130,600,50)
	ground = new Ground(1000,height,2000,20);
	rectbottom = new RectBottom(920,680,150,20);
	rectleft = new RectLeft(855,640,20,100);
	rectright = new RectRight(1000,640,20,100);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("white")
  textSize(48)
  text ("Press Up arrow to move the ball up and Press down arrow to move the ball down",20,50)

  paper.display();
  ground.display();
  rectbottom.display();
  rectleft.display();
  rectright.display();

  keypressed();
  
  drawSprites();
}

function keypressed () {

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-6});
	}

	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:12});
	}
}


