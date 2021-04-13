class String{
    constructor(body, B){
        var options = {
            bodyA: body,
            pointB: B,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA = body;
        this.pointB = B;
        this.String = Constraint.create(options);
        World.add(world, this.String);
    }

    fly(){
        this.String.bodyA = null;
    }
    attached(body){
        this.String.bodyA = body;
    }

    display(){
        if(this.String.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}