var ground, groundImage;
var boy, boyImage;


function preload() {
    groundImage = loadImage("bg.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    ground = createSprite(width / 2, height / 2, 50, 50)
    //ground.addImage("ground",groundImage)
    ground.velocityX = -6;
    
     boy = createSprite(300,20,40,40)

}

function draw() {
    background("black")
 


    drawSprites()
}