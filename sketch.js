
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var groundObject, rope1 ,rope2 ,rope3 , rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new Bob(400,400);
bobObject2 = new Bob(450,400);
bobObject3 = new Bob(500,400);
bobObject4 = new Bob(350,400);
bobObject5 = new Bob(300,400);

groundObject = new Ground(400,200,550,30);
rope1 = new Rope(bobObject1.body, groundObject.body,0,0);
rope2 = new Rope(bobObject2.body, groundObject.body,50,0);
rope3 = new Rope(bobObject3.body, groundObject.body,100,50);
rope4 = new Rope(bobObject4.body, groundObject.body -50, 0);
rope5 = new Rope(bobObject5.body, groundObject.body, -100,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  groundObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject3.body, bobObject5.body.position,{x:75,y:-75})
  }
}


