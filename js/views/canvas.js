function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.imgArr = [];  

    this.setBackground = function(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    this.loadImages = function() {
        this.numImages = 1;
        this.imgLoaded = 0;
        console.log(this.imgLoaded); 
        var hudBack = new Image();
        hudBack.onload = function() {
            //const hudBackPat
        };
        this.imgLoaded++;
        hudBack.onerror = function() {
            console.log("error");
        }
        hudBack.src = 'js/views/textures/concretePat1.png';
        this.imgArr.push(hudBack);
    }

    this.drawEnemy = function() {
        console.log('Enemy');
    }

    this.drawHUD = function(ammo, health, gunIndex, armor, ammoArray) {
        // Create Gradients
        var hudMedGradient = this.context.createLinearGradient(0, 575, 0, 600);
        hudMedGradient.addColorStop(0, '#696969');
        hudMedGradient.addColorStop(.5, '#A9A9A9');


        // Draw background
        //this.context.drawImage(this.imgArr[0], 0, 0);
        const hudPat = this.context.createPattern(this.imgArr[0], 'repeat');
        this.context.fillStyle = hudPat;
        this.context.fillRect(0, 500, 800, 100);

        // Face Background
        this.context.fillStyle = 'black';
        this.context.fillRect(350, 500, 100, 100)

        this.context.save();

        // Big Red Font
        this.context.font = '900 38px Orbitron';

        // Shadow
        this.context.shadowOffsetX = 3;
        this.context.shadowOffsetY = 3;
        this.context.shadowColor = 'black';

        // Draw Ammo
        this.context.fillStyle = 'red';
        this.context.textAlign = 'right';
        this.context.fillText(ammo, 105, 545);

        // Draw Health
        this.context.fillText(health + "%", 235, 545);

        // Draw Armor
        this.context.fillText(armor + "%", 575, 545);

        // Medium Grey Font
        this.context.shadowOffsetX = 2;
        this.context.shadowOffsetY = 2;
        
        this.context.fillStyle = hudMedGradient;
        this.context.font = '900 23px Orbitron';
        this.context.textAlign = 'middle';

        // Draw "AMMO"
        this.context.fillText("AMMO", 97, 590);

        // Draw "HEALTH"
        this.context.fillText("HEALTH", 235, 590);

        // Draw "ARMS"
        this.context.fillText("ARMS", 340, 590);

        // Draw "ARMOR"
        this.context.fillText("ARMOR", 565, 590);

        // Small Grey Font
        this.context.font = '400 18px Orbitron';
        this.context.fillStyle = '#A9A9A9';

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

        this.context.restore();

    }
}