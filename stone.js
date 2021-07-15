class stone {
    constructor (x, y) {
        var option = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(this.x, this.y, 12, option);
        this.image=loadImage('images/stone.png');
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(this.body.position);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 30, 30);
        pop();
    }
}