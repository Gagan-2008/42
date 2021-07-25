
var bG_img,img1,img3,img4,img5,img6,img7;
var iss, spacecraft;
var hasDocked =false;
function preload(){
  bG_img = loadImage("images/BG.jpg");
  img1 = loadImage("images/img 1.png");
  img3 = loadImage("images/img 3.png");
  img4 = loadImage("images/img 4.png");
  img5 = loadImage("images/img5.png");
  img6 = loadImage("images/img6.png");
  img7 = loadImage("images/img7.png");

  //fruitGroup = new Group();
}
function setup() {
  createCanvas(800,700);

  spacecraft=createSprite(330,550, 50, 50);
  spacecraft.addImage(img4);
	spacecraft.scale = 0.25;  

  iss=createSprite(400, 300, 50, 50);
  iss.addImage(img1);
	iss.scale = 0.5;  

 
 
}

function draw() {
  background(bG_img);  
  spacecraft.addImage(img4);
  if(!hasDocked)
  {
    
    if(keyDown(LEFT_ARROW)){
           spacecraft.addImage(img6);
           spacecraft.x  -=2;
    }
    else if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(img5);
      spacecraft.x  +=2;
    }
    else if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(img7);
    }
     else if(keyDown(UP_ARROW)){
      
      spacecraft.y  -=2;
    }
  }

  if (spacecraft.x >= 306 && spacecraft.x <= 310 && spacecraft.y >= 416 && spacecraft.y<= 425)
   {
    hasDocked = true;
    textSize(32);
    text("Docking Successfull!!", 400, 650);
    fill(0, 0, 0);
   
   }
  
   
    console.log( spacecraft.x, spacecraft.y)
   
  
  drawSprites();
}