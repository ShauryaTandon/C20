var sprite1, sprite2
function setup() {
  createCanvas(800,400);
 sprite1 =createSprite(400, 200, 50, 100);
 sprite2 =createSprite(100,200,50,100)
 sprite1.shapeColor="red"
 sprite2.shapeColor="red"
}

function draw() {
  background("green");  
  drawSprites();

  sprite1.x=mouseX
  sprite1.y=mouseY

  console.log(sprite1.x-sprite2.x)

  if(sprite1.x-sprite2.x<sprite1.width/2+sprite2.width/2 &&sprite2.x-sprite1.x<sprite1.width/2+sprite2.width/2 
    &&sprite1.y-sprite2.y<sprite1.height/2+sprite2.height/2 &&sprite2.y-sprite1.y<sprite1.height/2+sprite2.height/2 ){
    sprite1.shapeColor="black"
    sprite2.shapeColor="black"
  }
  else{
    sprite1.shapeColor="red"
    sprite2.shapeColor="red"
  }
}