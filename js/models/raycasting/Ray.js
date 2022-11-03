class Ray {
    constructor(x, y, direction) {
        this.pos = {
            x: x,
            y: y
        }

        this.dir = direction;
    }

    cast(boundary) {
        // Wall Points
        const x1 = boundary.p1.x;
        const y1 = boundary.p1.y;
        const x2 = boundary.p2.x;
        const y2 = boundary.p2.y;

        // Boundary Points
        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const [x4, y4] = this.#addEndPoint(this.pos, this.dir, 2);

        //console.log([x1, y1], [x2, y2], [x3, y3], [x4, y4]);

        const dn = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (dn == 0) {
            return;
        }

        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / dn;
        const u = ((x1 - x3) * (y1 - y2) - (y1  - y3) * (x1 - x2)) / dn;

        if (t > 0 && t < 1 && u > 0) {

            return {
                x: x1 + t * (x2 - x1), 
                y: y1 + t * (y2 - y1)
            }
        } else {
            return;
        }
    }

    #degreeToRadian(deg) {
        return deg * (Math.PI / 180);
    }

    #radianToDegree(rad) {
        return rad * (180 / Math.PI);
    }

    #addEndPoint(pos, dir, units) {
        let x = pos.x + (units * Math.cos((this.#degreeToRadian(dir))));
        let y = pos.y + -(units * Math.sin((this.#degreeToRadian(dir))));

        return [x, y];
    }
}