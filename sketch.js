var a
var b
var c
var d


function setup() {
  createCanvas(800,400);
 a=createSprite(400,200,70,70);
b=createSprite(300,100,70,70);
c=createSprite(200,50,70,70);
d=createSprite(200,300,70,70);
a.debug=true;
b.debug=true;
c.debug=true;
d.debug=true;

c.velocityY=3;
d.velocityY=-3;

}

function draw() {
  background(50,200,130);  
  drawSprites();

  a.x=mouseX;
  a.y=mouseY;


  if(a.x-b.x<a.width/2+b.width/2
    &&b.x-a.x<b.width/2+a.width/2
    &&a.y-b.y<a.height/2+b.height/2
    &&b.y-a.y<b.height/2+a.height/2){
    b.shapeColor="red";
  }

  else{
    a.shapeColor="blue";
    b.shapeColor="yellow";
};
console.log(a.x-b.x);

//bounceoff algorithm
if(c.x-d.x<c.width/2+d.width/2
  &&d.x-c.x<d.width/2+c.width/2){
    c.velocityX=c.velocityX*(-1);
    d.velocityX=d.velocityX*(-1);
  };
  if(c.y-d.y<c.height/2+d.height/2
    &&d.y-c.y<d.height/2+c.height/2){
      c.velocityY=c.velocityY*(-1);
      d.velocityY=d.velocityY*(-1);
    };

}

