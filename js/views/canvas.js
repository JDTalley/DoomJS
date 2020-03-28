function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;    

    this.setBackground = function(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    this.drawEnemy = function() {
        console.log('Enemy');
    }

    this.drawHUD = function(ammo, health, gunIndex, armor, ammoArray) {
        // Draw background
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 500, 800, 100);

        // Face Background
        this.context.fillStyle = 'black';
        this.context.fillRect(350, 500, 100, 100)

        // Big Red Font
        this.context.font = '900 38px Orbitron';

        // Draw Ammo
        this.context.fillStyle = 'red';
        this.context.textAlign = 'right';
        this.context.fillText(ammo, 105, 545);

        // Draw Health
        this.context.fillText(health + "%", 235, 545);

        // Draw Armor
        this.context.fillText(armor + "%", 575, 545);

        // Medium Grey Font
        this.context.font = '900 23px Orbitron';
        this.context.textAlign = 'middle';

        // Draw "AMMO"
        this.context.fillStyle = 'grey';
        this.context.fillText("AMMO", 97, 590);

        // Draw "HEALTH"
        this.context.fillText("HEALTH", 235, 590);

        // Draw "ARMS"
        this.context.fillText("ARMS", 340, 590);

        // Draw "ARMOR"
        this.context.fillText("ARMOR", 565, 590);

        // Small Grey Font
        this.context.font = '400 18px Orbitron';

        // Draw Ammo Descriptions
        this.context.fillText("BULL", 655, 530);
        this.context.fillText("SHEL", 655, 550);
        this.context.fillText("RCKT", 655, 570);
        this.context.fillText("CELL", 655, 590);

        // Draw "/"
        this.context.fillText("/", 735, 530);
        this.context.fillText("/", 735, 550);
        this.context.fillText("/", 735, 570);
        this.context.fillText("/", 735, 590);

        // Draw ammoAll
        this.context.textAlign = 'right'
        this.context.fillStyle = 'gold';
        this.context.fillText(ammoArray[0], 720, 530);
        this.context.fillText(ammoArray[1], 720, 550);
        this.context.fillText(ammoArray[2], 720, 570);
        this.context.fillText(ammoArray[3], 720, 590);

        this.context.fillText("200", 790, 530);
        this.context.fillText("50", 790, 550);
        this.context.fillText("50", 790, 570);
        this.context.fillText("300", 790, 590);

    }
}