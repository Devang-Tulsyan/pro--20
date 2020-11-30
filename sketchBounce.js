//Program to make algorithm for bouncing sprites
var movingRect, fixedRect;

function setup()
{
    createCanvas(1000,600)

    movingRect=createSprite(200,100,50,50);
    fixedRect=createSprite(800,200,60,300)
    movingRect.shapeColor=fixedRect.shapeColor="yellow"
    movingRect.velocityX=20;
     

}

function draw()
{
    background(0);
     //console.log("Width Gap " + (movingRect.x-fixedRect.x )+ " "+(movingRect.width/2+fixedRect.width/2))
     //console.log("Height Gap "+ (movingRect.y-fixedRect.y )+ " " +(movingRect.height/2+fixedRect.height/2))
     
    //bouncing algorithm
    if(Math.abs(movingRect.x-fixedRect.x)<=(movingRect.width/2+fixedRect.width/2)) {

           movingRect.velocityX= movingRect.velocityX *-1;
           //fixedRect.velocityX *=-1;

    }
     
   if(Math.abs(movingRect.y-fixedRect.y)<=(movingRect.height/2+fixedRect.height/2))
     {
        movingRect.velocityY= movingRect.velocityY *-1;
        //fixedRect.velocityY *=-1;

   }

    drawSprites();
}