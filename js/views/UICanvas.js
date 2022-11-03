class UICanvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.imgArr = []; 
    }

    setBackground(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    loadImages() {
        this.numImages = 2;
        this.imgLoaded = 0;
        // Img Vars
        let hudBack = new Image();
        let pist = new Image();
        hudBack.onload = function() {

        };
        this.imgLoaded++;
        hudBack.onload = function() {

        }
        this.imgLoaded++;
        // Sources
        hudBack.src = 'js/views/textures/concretePat1.png';
        pist.src = 'js/views/textures/PISGA0.png';
        this.imgArr.push(hudBack);
        this.imgArr.push(pist);
    }

    drawTestGrid() {
        this.context.save();
        this.context.strokeStyle = '#ff0000';
        this.context.beginPath();
        this.context.moveTo(this.width/2, 0);
        this.context.lineTo(this.width/2, this.height);
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(0, this.height/2);
        this.context.lineTo(this.width, this.height/2);
        this.context.stroke();
        this.context.restore();
    }

    drawGun(i) {
        this.context.save();
        this.context.drawImage(this.imgArr[i+1], (this.width/2)-90, 350, 150, 150);
        this.context.restore();
    }

    drawHUD(ammo, health, gunIndex, armor, ammoArray) {
        // Create Gradients
        let hudMedGradient = this.context.createLinearGradient(0, 575, 0, 600);
        hudMedGradient.addColorStop(0, '#696969');
        hudMedGradient.addColorStop(.5, '#A9A9A9');

        // Create Patterns
        const hudPat = this.context.createPattern(this.imgArr[0], 'repeat');
        const hudHeight = (this.height)/6;
        const hudHHLeft = (this.width/2) - hudHeight/2;
        const hudHHRight = (this.width/2) + hudHeight/2;

        // Draw background
        //this.context.drawImage(this.imgArr[0], 0, 0);
        this.context.fillStyle = hudPat;
        this.context.fillRect(0, 5*hudHeight, this.width, hudHeight);

        this.context.save();
        this.context.globalAlpha = 0.4;
        this.context.strokeStyle = 'black';
        this.context.lineWidth = 4;
        this.context.strokeRect(0, 5*hudHeight, (2*hudHHLeft)/6, hudHeight);
        this.context.strokeRect((2*hudHHLeft)/6 + 2, 5*hudHeight, (2*hudHHLeft)/5, hudHeight);
        this.context.strokeRect((22*hudHHLeft)/30 + 4, 5*hudHeight, (8*hudHHLeft)/30 - 4, hudHeight);
        this.context.strokeRect(hudHHRight, 5*hudHeight, (2*hudHHLeft)/5, hudHeight);
        this.context.strokeRect(hudHHRight + (2*hudHHLeft)/5 + 2, 5*hudHeight, (hudHHLeft)/10, hudHeight);
        this.context.strokeRect(hudHHRight + hudHHLeft/2, 5*hudHeight, (hudHHLeft)/2, hudHeight);
        this.context.globalAlpha - 1.0;
        this.context.restore();

        // Face Background
        this.context.fillStyle = 'black';
        this.context.fillRect((this.width/2) - (hudHeight/2), 5*hudHeight, hudHeight, hudHeight)

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
        this.context.fillText(ammo, 118, 545);

        // Draw Health
        this.context.fillText(health + "%", 287, 545);

        // Draw Armor
        this.context.fillText(armor + "%", 670, 545);

        // Medium Grey Font
        this.context.shadowOffsetX = 2;
        this.context.shadowOffsetY = 2;
        
        this.context.fillStyle = hudMedGradient;
        this.context.font = '900 23px Orbitron';
        this.context.textAlign = 'middle';

        // Draw "AMMO"
        this.context.fillText("AMMO", 110, 590);

        // Draw "HEALTH"
        this.context.fillText("HEALTH", 285, 590);

        // Draw "ARMS"
        this.context.fillText("ARMS", 413, 590);

        // Draw "ARMOR"
        this.context.fillText("ARMOR", 660, 590);

        // Small Grey Font
        this.context.font = '400 18px Orbitron';
        this.context.fillStyle = '#A9A9A9';

        // Draw Ammo Descriptions
        this.context.fillText("BULL", 820, 530);
        this.context.fillText("SHEL", 820, 550);
        this.context.fillText("RCKT", 820, 570);
        this.context.fillText("CELL", 820, 590);

        // Draw "/"
        this.context.fillText("/", 892, 530);
        this.context.fillText("/", 892, 550);
        this.context.fillText("/", 892, 570);
        this.context.fillText("/", 892, 590);

        // Draw ammoAll
        this.context.textAlign = 'right'
        this.context.fillStyle = 'gold';
        this.context.fillText(ammoArray[0], 875, 530);
        this.context.fillText(ammoArray[1], 875, 550);
        this.context.fillText(ammoArray[2], 875, 570);
        this.context.fillText(ammoArray[3], 875, 590);

        this.context.fillText("200", 945, 530);
        this.context.fillText("50", 945, 550);
        this.context.fillText("50", 945, 570);
        this.context.fillText("300", 945, 590);

        this.context.restore();
    }
}