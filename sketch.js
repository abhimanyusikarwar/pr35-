const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgim;
var iron;
var iron2;
var vill;
var g;
var slings;
var a;
var l=[];
function preload(){
  bgim=loadImage("image.png");
  
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
  iron=new Ironman(400,330,100,100);
  iron2=new villian(500,330,100,100);
  vill=new Vil(700,100,200,200);
  g=new Ground(400,390,800,20);
  a=new attack(200,50,20,20);
  slings=new Slingshot(iron.body,a.body);
  Engine.run(engine);
}

function draw() {
  background(bgim);
  iron.display();
  iron2.display();
  vill.display(); 
  g.display();
  slings.display();
  a.display();
  if(frameCount%10===0){
    l.push(new laser(random(700,width/2+10,),10,10));
  }
  for(var j =0;j < l.length;j++){
    l[j].display();
  }
  //drawSprites();
}