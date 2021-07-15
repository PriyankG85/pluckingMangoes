class ground {
    constructor (x, y, w) {
        this.x=x;
        this.y=y;
        this.w=w;
        this.body=Bodies.rectangle(this.x, this.y, this.w, 20, {isStatic: true});
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(this.body.position);
        rectMode(CENTER);
        fill('brown');
        rect(pos.x, pos.y, this.w, 20);
        pop();
    }
}