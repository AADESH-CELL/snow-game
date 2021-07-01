const Engine = Matter.Engine; 
 const World = Matter.World;
  const Bodies = Matter.Bodies; 
  const Body = Matter.Body;
  var snow1,snow2,snow3,snowImage
var boy,boyimage
var bg 
function preload(){
boyimage=loadImage ("boy.png")
bg =loadImage ("snow3.jpg")
snowImage= loadImage ("snow4.webp")
}

function setup() {
  createCanvas(1600,1000);
  engine = Engine.create(); 
   world = engine.world; 
   Engine.run(engine);

  boy = createSprite(150,500, 50, 50);
  boy.addImage(boyimage)
  boy.scale=2
  
  snow1 = createSprite(650,50)
  snow1.addImage(snowImage)
  snow1.scale=0.3
  snow2 = createSprite(350,10)
  snow2.addImage(snowImage)
  snow2.scale=0.3
  snow3 = createSprite(900,90)
  snow3.addImage(snowImage)
  snow3.scale=0.3
  snowbody1=Bodies.circle(600,50,5,{restitution:0.5,isStatic:true}) 
  World.add(world,snowbody1)
  snowbody2=Bodies.circle(350,10,5,{restitution:0.5,isStatic:true}) 
  World.add(world,snowbody2)
  snowbody3=Bodies.circle(900,90,5,{restitution:0.5,isStatic:true}) 
  World.add(world,snowbody3)
}

function draw() {
  background(bg); 
  snow1.x=snowbody1.position.x
  snow1.y=snowbody1.position.y 
  snow2.x=snowbody2.position.x
  snow2.y=snowbody2.position.y 
  snow3.x=snowbody3.position.x
  snow3.y=snowbody3.position.y 
  drawSprites();
}
function keyPressed(){
  if (keyCode===RIGHT_ARROW){
    boy.x=boy.x+15
    
    
    }
    if (keyCode===LEFT_ARROW){
      boy.x=boy.x-15
      
      
      }
      if (keyCode===32){
       Matter.Body.setStatic(snowbody1,false)
       Matter.Body.setStatic(snowbody3,false)
       Matter.Body.setStatic(snowbody2,false)
        }
          

}
