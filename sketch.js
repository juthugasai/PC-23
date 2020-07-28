var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bar1,bar2,bar3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	


	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	 bar1=createSprite(280,600,20,100)
	  bar1.shapeColor=color("red");

	  bar2=createSprite(370,650,200,20)
	  bar2.shapeColor=color("red");

	  bar3=createSprite(460,600,20,100)
	  bar3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageBody.collide(bar2)
  //helicopterSprite.velocityX=3
  packageSprite.x=packageBody.position.x
  packageSprite.y=packageBody.position.y
  //isStatic: true
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
Matter.Body.setStatic(packageBody, false);
	//packageBody.isStatic(false)
  }
}



