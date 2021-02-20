class Drop{
    constructor(x,y){
        var options ={
            isStatic = false
        }
     

        this.body = Bodies.circle(x,y,width);
        this.width = 5;

    }
    display(){
        push;
        ellipseMode(RADIUS);
        ellipse(pos.x , pos.y,this.width,this.width);
        pop;
    }
    

}
