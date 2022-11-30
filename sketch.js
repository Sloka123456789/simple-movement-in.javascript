let saturn_x = 500
let saturn_y = 400

// this variable will store image
let saturn_img 

function preload() 
{
  saturn_img = loadImage("saturn.png")
}


function setup() {
createCanvas(1000,800);
  
  saturn_img.resize(100,100);
}

function draw() {
  background(0,0,126);
  
  image(saturn_img,saturn_x,saturn_y)
  
  
  if(keyIsPressed==true)
    {
      if(keyCode==38)
      {
        saturn_y = saturn_y - 5
      }
      if(keyCode==40)
        {
        saturn_y = saturn_y + 5 
        }
      if(keyCode==37)
        {
          saturn_x = saturn_x - 5
        }
          if(keyCode==39)
        {
          saturn_x = saturn_x + 5 
      
      
    }

        }
      
}   

