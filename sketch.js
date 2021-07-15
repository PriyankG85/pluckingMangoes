
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var Stone, Tree, Ground;
var Mango1, Mango2, Mango3, Mango4, Mango5, Mango6, Mango7, Mango8, Mango9, Mango10;
var sling;

function preload() {
	boyImg = loadImage('images/boy.png');
}

function setup() {
	createCanvas(1000, 680);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(300, 600, 50, 50);
	boy.addImage('boy', boyImg);
	boy.scale = .1;

	Stone = new stone(250, 545);
	Tree = new tree(650, 420, 500);
	Ground = new ground(width / 2, height, width);
	Mango1 = new mango(700, 250);
	Mango2 = new mango(600, 230);
	Mango3 = new mango(720, 350);
	Mango4 = new mango(660, 320);
	Mango5 = new mango(540, 330);
	Mango6 = new mango(760, 280);
	Mango7 = new mango(800, 320);
	Mango8 = new mango(480, 320);
	Mango9 = new mango(560, 380);
	Mango10 = new mango(600, 300);

	sling = new slingshot(Stone.body, { x: 250, y: 540 });
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background('skyblue')
	textSize(26);
	fill('white');
	text("Press 'Space' to get second chance to Play", 40, 60);
	drawSprites();

	Tree.display();
	Ground.display();
	Mango1.display();
	Mango2.display();
	Mango3.display();
	Mango4.display();
	Mango5.display();
	Mango6.display();
	Mango7.display();
	Mango8.display();
	Mango9.display();
	Mango10.display();
	sling.display();
	Stone.display();

	detectCollision(Stone, Mango1);
	detectCollision(Stone, Mango2);
	detectCollision(Stone, Mango3);
	detectCollision(Stone, Mango4);
	detectCollision(Stone, Mango5);
	detectCollision(Stone, Mango6);
	detectCollision(Stone, Mango7);
	detectCollision(Stone, Mango8);
	detectCollision(Stone, Mango9);
	detectCollision(Stone, Mango10);

}

function keyPressed() {
	if (keyCode == 32) {
		// console.log('spaceBtn');
		Body.setPosition(Stone.body, { x: 250, y: 545 });
		sling.attach(Stone.body);
	}
}

function mouseDragged() {
	Body.setPosition(Stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	sling.fly();
}

function detectCollision(lstone, lmango) {

	var d = dist(lstone.body.position.x, lstone.body.position.y, lmango.body.position.x, lmango.body.position.y)
	if (d <= 24) {
		// console.log('collided');
		Body.setStatic(lmango.body, false);
	}
}

// function detectCollision(a,b){
// 	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
// 	if(d <= 50){
// 		Body.setStatic(b.body,false);
// 	}
// }