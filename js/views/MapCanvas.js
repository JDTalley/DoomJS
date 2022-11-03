class MapCanvas {
    constructor(id) {
        this.canvas = document.getElementById(id);
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    drawBackground(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    drawLine(startPos, endPos, color) {
        this.context.strokeStyle = color;
        this.context.lineWidth = 1;
        //this.context.translate(startPos.x, startPos.y);
        this.context.beginPath();
        this.context.moveTo(startPos.x, startPos.y);
        this.context.lineTo(endPos.x, endPos.y);
        this.context.stroke();
        this.context.setTransform(1, 0, 0, 1, 0, 0);
    }

    drawRay(pos) {
        this.context.fillStyle = '#FFF';
        this.context.fillRect(pos.x - 2, pos.y - 2, 4, 4);        
    }
}