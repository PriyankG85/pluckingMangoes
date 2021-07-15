class tree {
    constructor(x, y, s) {
        var option = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x=x;
        this.y=y;
        this.size=s;
        this.body=Bodies.rectangle(this.x, this.y, 50, 50, option);
        this.image=loadImage('images/tree.png');
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.size, this.size);
        pop();
    }
}