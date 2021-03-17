var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    background("lightblue");

    //create 4 different surfaces
    surface1 = createSprite(0,580,195,20);
    surface1.shapeColor("green");
    surface2 = createSprite(200,580,195,20);
    surface2.shapeColor("yellow");
    surface3 = createSprite(400,580,195,20);
    surface3.shapeColor("red");
    surface4 = createSprite(600,580,195,20);
    surface4.shapeColor("blue");

    //create box sprite and give velocity
    box = createSprite(random(20,750),15,15);
    box.shapeColor("white");
    box.velocityX = 4;
    box.velocityY = 4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprite();
    box.bounceOff("edges");

    //add condition to check if box touching surface and make it
    if (surface1.isTouching(box) && box.bounceOff(surface1))
    {
        //change color here
        box.shapeColor("green");
        //play music
        music.play();
    }

    if (surface2.isTouching(box) && box.bounceOff(surface2))
    {
        //change color here
        box.shapeColor("green");
        //stop music
        music.stop();
        //stop box
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if (surface3.isTouching(box) && box.bounceOff(surface3))
    {
        //change color here
        box.shapeColor("green");
        //play music
        music.play();
    }

    if (surface4.isTouching(box) && box.bounceOff(surface4))
    {
        //change color here
        box.shapeColor("green");
        //play music
        music.play();
    }
    drawSprites();
}