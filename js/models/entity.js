class Entity {
    constructor(x, y, dx, dy, orientation, jerk) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.jerk = jerk;
        this.orientation = orientation;
        this.maxD = 5;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setO(o) {
        this.orientation = o;
    }

    setDx(dx) {
        this.dx = dx;
    }

    setDy(dy) {
        this.dy = dy;
    }

    updatePosition(width, height) {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0) {
            this.setX(width);
        }
        if (this.x > width) {
            this.setX(0);
        }
    
        if (this.y < 0) {
            this.setY(height);
        } 
        if (this.y > height) {
            this.setY(0);
        }
    }

    accelerate() {
        var deg = this.mathifyOrientation();
        this.dx += Math.cos(deg) / this.jerk;
        this.dy -= Math.sin(deg) / this.jerk;

        // Max Speed Check
        if (this.dx > this.maxD) {
            this.dx = this.maxD;
        }
        if (this.dx < -this.maxD) {
            this.dx = -this.maxD;
        }
        if (this.dy > this.maxD) {
            this.dy = this.maxD;
        }
        if (this.dy < -this.maxD) {
            this.dy = -this.maxD;
        }
    }

    decelerate() {
        var deg = this.mathifyOrientation();
        this.dx -= Math.cos(deg) / this.jerk;
        this.dy += Math.sin(deg) / this.jerk;

        // Max Speed Check
        if (this.dx > this.maxD) {
            this.dx = this.maxD;
        }
        if (this.dx < -this.maxD) {
            this.dx = -this.maxD;
        }
        if (this.dy > this.maxD) {
            this.dy = this.maxD;
        }
        if (this.dy < -this.maxD) {
            this.dy = -this.maxD;
        }
    }

    mathifyOrientation() {
        // Convert to degrees, then convert to radians.
        return (90 - this.orientation) * (Math.PI / 180);
    }

    // Positive rotates right, Negative rotates left
    rotate(amount) {
        this.orientation += amount;
    }

    checkCollision(entity) {
        var thisBounds = this.getBounds();

        for (let i = 0; i < thisBounds.length; i++) {
            if (thisBounds[i].x > (entity.x - entity.w / 2) &&
                thisBounds[i].x < (entity.x + entity.w / 2) &&
                thisBounds[i].y > (entity.y - entity.h / 2) &&
                thisBounds[i].y < (entity.y + entity.h / 2)) {
                    return true;
                }
        }
        return false;
    }
}