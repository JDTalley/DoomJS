class Player extends Entity {
    constructor(x, y, fov) {
        super(x, y, 0, 0, 0, 10)
        this.fov = fov;
    }

    checkDistance(entity) {

    }

    vectorFOV() {
        let v0 = Math.tan((90 - (this.orientation - (this.fov/2))) * (Math.PI / 180));
        let v1 = Math.tan((90 - (this.orientation + (this.fov/2))) * (Math.PI / 180));

        return [v0, v1];
    }
}