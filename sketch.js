var bg;
var spaceShipImg,spaceShip1,spaceShip2Img,spaceShip2,bulletImg,thunderImg;
var astroidImg,astroid,bullet,thunder;
var starImg,star;
var life = 50;
var BulletG;

function preload(){
    bg = loadImage("background.jpg");
    starImg = loadImage("star.png");
    astroidImg = loadImage("astroid.png");
    spaceShipImg = loadImage("spaceship1.png");
    spaceShip2Img = loadImage("spaceship2.png");
    bulletImg = loadImage("bullet.png");
    thunderImg = loadImage("thunder.png");
}

function setup(){
    canvas = createCanvas(1690,800)

    spaceShip1 = createSprite(150,400,50,50);
    spaceShip1.addImage(spaceShipImg);
    spaceShip1.scale = 0.5;
    spaceShip1.rotation = 90;


    spaceShip2 = createSprite(1500,400,50,50);
    spaceShip2.addImage(spaceShip2Img);
    spaceShip2.scale = 0.5
    spaceShip2.rotation = -90

    astroid = createSprite(400,100,50,50);
    astroid.addImage(astroidImg);
    astroid.scale= 0.2

    star = createSprite(300,600,50,50);
    star.addImage(starImg);
    star.scale = 0.2

    BulletG = new Group();



}

function draw(){
    background(bg);

    spaceShip1.y = World.mouseY
    spaceShip1.x = World.mouseX


    fill("white")
    textSize(40)
    text("life :" + life,spaceShip1.x-220,spaceShip1.y+10)
    text.rotation = 90;
    
    if(spaceShip1.isTouching(star)){
        star.destroy();
        life += 20
    }
    
    if(keyDown("space")){
        fireBullet1();
    }
    
    if (keyWentDown("T")){

        thunder = createSprite(spaceShip1.x+170,spaceShip1.y,20,20)
        thunder.addImage(thunderImg);
        thunder.scale = 0.5
        
    }
    if(keyWentUp("T")){
       thunder.destroy()
    }
    if(keyDown("W")){
        spaceShip1.rotation += -2
    }
    if(keyDown("S")){
        spaceShip1.rotation+=2
    }

    if(spaceShip1.rotation>45){
        BulletG.velocityY=2
    }

    drawSprites()

}

function fireBullet1(){

if ( frameCount%10 === 0){

    bullet = createSprite(mouseX,mouseY,10,10);
    bullet.addImage(bulletImg);
    bullet.scale = 0.15;
    //bullet.rotation = 90;
    //bullet.velocityY = - 8;
    bullet.lifetime = 800;
    BulletG.add(bullet);

    
    if(spaceShip1.rotation<90 && spaceShip1.rotation>0){
            bullet.velocityX= -8
            bullet.rotation = spaceShip1.rotation
    }

    else{
    if(spaceShip1.rotation>90 && spaceShip1.rotation<180){
         bullet.velocityX = -8
         bullet.rotation = spaceShip1.rotation
            }
        
    else{
     if(spaceShip1.rotation>180 && spaceShip1.rotation<270){
        bullet.velocityX = 8
         bullet.rotation = spaceShip1.rotation
     }

     
     else{
        if(spaceShip1.rotation>270 && spaceShip1.rotation<360){
           bullet.velocityX = 8
            bullet.rotation = spaceShip1.rotation
        }
    
     }
    }
}
}
else{
    if(spaceShip1.rotation<-90 && spaceShip1.rotation>0){
        bullet.velocityX= -8
        bullet.rotation = spaceShip1.rotation
    }

else{
if(spaceShip1.rotation>90 && spaceShip1.rotation<180){
     bullet.velocityX = -8
     bullet.rotation = spaceShip1.rotation
        }
    
else{
 if(spaceShip1.rotation>180 && spaceShip1.rotation<270){
    bullet.velocityX = 8
     bullet.rotation = spaceShip1.rotation
 }

 else{
    if(spaceShip1.rotation>270 && spaceShip1.rotation<360){
       bullet.velocityX = 8
        bullet.rotation = spaceShip1.rotation
    }
 }
}
}
}
}

    

    



    