class Ball{
    constructor(x,y,radius){
        var options={
            'density':1,
            'frictionAir':0.005
            
        }
        this.body=Bodies.circle(x,y,radius-40,options);
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        var position=this.body.position;
        var angle=this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius);
        pop();
    }
}