const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var engine, world;
var bob1,bob2,bob3,bob4,bob5;
var roof;




function setup(){
    var canvas = createCanvas(1500,1000);
    engine = Engine.create();
    world = engine.world;


    roof = new Roof(width/2,100,800,40);
    
    bob1 = new Bob(450,550,100);
	bob2 = new Bob(550,550,100);
	bob3 = new Bob(650,550,100);
    bob4 = new Bob(750,550,100);
	bob5 = new Bob(850,550,100);

  
    rope1 = new Rope(bob1.body,roof.body,-200,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,100,0);
	rope5 = new Rope(bob5.body,roof.body,200,0);

  

    Engine.run(engine)

} 

function draw() {
	rectMode(CENTER);
	background("red");
  
	Engine.update(engine);
  
	roof.display();
	
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
  
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
  
	
	
	drawSprites();

  }
  function keyPressed() { 
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-2000,y:2000}); 
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-3000,y:2000}); 
	  }
	  
	}