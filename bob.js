class Bob{
    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:1.08,
            friction:0.5,
            density:4.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var bob_pos=this.body.position;
        push()
        translate(bob_pos.x,bob_pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        fill("cyan");
        ellipse(0,0,this.r,this.r);
        pop()
    }
}
