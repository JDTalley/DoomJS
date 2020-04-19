class Level {
    constructor() {
        // Player starting point
        this.start = {
            x: 0,
            y: 0
        }
        // Player starting Orientation
        this.o = 0;
        // Array of Entity Objects
        this.things = [];
        // Array of Wall Objects
        this.walls = []; 
    }

    // Set Start Position
    setStart(v1, v2) {
        this.start.x = v1;
        this.start.y = v2;
    }

    // Set Orientation
    setO(o) {
        this.o = o;
    }

    // Add wall function
    addWall(wall) {
        this.walls.push(wall);
    }
}