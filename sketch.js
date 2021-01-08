const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;
const Constraint=Matter.Constraint;

var slingShot,polygonImg,polygon;

function preload(){
polygonImg=loadImage("polygon.png");
}

function setup(){ 
    var canvas=createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     //add bodies here 
polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    // slingShot =new Slingshot(this.polygon,{x:100,y:200});
    } 
 function draw(){
background(0);
Engine.update(engine);
imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,40,40);

polygon.display();
 }   

 function mouseDragged(){
     Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
 }
 function mouseReleased(){

    
 }