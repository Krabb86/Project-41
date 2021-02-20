
var drops1;
function preload(){
    
}

function setup(){
    createCanvas(900, 900);
    drops1 = new Drop(this.x,10);
    this.x = random(10,900);
}

function draw(){
    background("black");
    drops.display();
 drawSprites();
}   

