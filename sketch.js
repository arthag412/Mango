
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Body=Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var mango1,mango2,mango3,mango4,mango5;
var tree;
var stone, slingShot;
var ground;
var slingShot;
var boy;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


	ground = new Ground(600,height,1200,20);
	tree=new Tree(1400,250);
	stone=new Stone(270,230);
	mango1=new Mango(580,80,20);
	mango2=new Mango(680,80,20);
	mango3=new Mango(540,50,20);
	mango4=new Mango(720,50,20);
	mango5=new Mango(620,30,20);
	boy=new Boy(1400,150);
	
	mango1.debug
	
    

	slingShot=new slingshot(stone.body,{x:210,y:280})
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	  Engine.run(engine)
}

function draw(){
    background("white");
    Engine.update(engine);
	strokeWeight(4);
	
	boy.display();
    
	slingShot.display();
	tree.display();
	ground.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
    mango5.display();
	
    
    
    detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
    
}
function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body, {x:270, y:230}) 
		slingShot.attach(stone.body);
	}
	}

	function detectollision(lstone, lmango){

		mangoBodyPos = lmango.body.position;
		stoneBodyPos = lstone.body.position;
	
		var distance = dist(stoneBodyPos.x, stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.y);
	
		if(distance <= lmango.r + lstone.r){
			Matter.Body.setStatic(lmango.body, false);
		}
	
		//console.log(mangoBodyPos.x);
	
	}
	