const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var bg;
function preload(){
  getBgImg();
}
function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(800,400);
  snowobj=new snow();
}

function draw() {
  Engine.update(engine);
  background(bg);  
 snowobj.display();

}
function getBgImg(){
bg=loadImage("snow1.jpg");
}