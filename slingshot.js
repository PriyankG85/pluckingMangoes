class slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 4
        }
        this.pointB = pointB;
        this.SlingShot = Constraint.create(options);
        World.add(world, this.SlingShot);
    }
    attach(body) {
        this.SlingShot.bodyA = body;
    }
    fly() {
        this.SlingShot.bodyA = null;
    }
    display() {
        if (this.SlingShot.bodyA) {
            var pointA = this.SlingShot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
}