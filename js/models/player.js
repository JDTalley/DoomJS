class Player extends Entity {
    constructor(x, y, dir) {
        super(x, y, 0, 0, dir, 10)

        this.pos = {
            x: x,
            y: y
        }

        this.rays = [];
    }

    addRay() {
        this.rays.push(new Ray(this.x, this.y, this.orientation));
    }
}