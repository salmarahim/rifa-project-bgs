var oliver, oliverImg;
var girl, girlImg;
var bg, bgImg,corridorImg,corridor2Img,corrMixImg;


function preload(){
  oliverImg = loadAnimation ("oliver1.png","oliver2.png","oliver3.png","oliver4.png","oliver5.png","oliver6.png","oliver7.png","oliver8.png");
  girlImg = loadImage("girl.png");
  bgImg = loadImage("bgg.jpg");
  bgflipImg = loadImage("bggflip.jpg");
  corridorImg=loadImage("corridor1.png");
  corridor2Img=loadImage("boxes.jpg");
  corrMixImg=loadImage("mixed.PNG")
}




function setup() {
  createCanvas(800,400);
  bg = createSprite(200,200);
  bg.addImage("bg",bgImg);

 

  oliver = createSprite(200, 300, 50, 50);
  oliver.addAnimation("oliverImg",oliverImg);
  oliver.velocityX = 1;

  

  

}

function draw() {
  background(255,255,255);
 
  image(bgImg,1300,0,800,400);
  image(bgflipImg,550,0,800,400);
  image(corridorImg,2120,0,800,400);
 
  image(corrMixImg,2900,0,800,400);
  image(corridor2Img,3500,0,800,400);
  image(bgImg,4200,0,800,400);
  if(oliver.x>4600){
    oliver.x=200;
  }
  if(keyDown(RIGHT_ARROW)){
    oliver.x+=05;

  }

  if(keyDown(LEFT_ARROW)){
    oliver.x-=05;

  }

  camera.position.x = oliver.x;
  drawSprites();
}