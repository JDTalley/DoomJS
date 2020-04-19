class Wall extends Entity {
    constructor(v1, v2, h) {
        super((v1[0]+v2[0])/2, 
            (v1[1]+v2[1])/2, 
            0, 
            0,
            Math.atan2((v1[1]-v2[1]), (v2[0]-v1[0])) * (180/Math.PI),
            0,
            0
        ) 
        this.v1 = {
            x: v1[0],
            y: v1[1]
        };
        this.v2 = {
            x: v2[0],
            y: v2[1]
        };
        this.h = h;
    }
}